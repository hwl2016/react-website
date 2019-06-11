const path = require('path');
const fs = require('fs');
const ExtTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_PRD = 'production' === NODE_ENV;
const WebpackEventHooks = require('./plugins/webpackEventHooks')

module.exports = [
    // {
    //     name: 'node'
    // },
    {
        name: 'browser',
        mode: IS_PRD ? 'production' : 'development',
        entry: {
            home: path.resolve(__dirname, '../src/scripts/pages/home/index.js'),
            bill: path.resolve(__dirname, '../src/scripts/pages/bill/index.js')
        },
        output: {
            path: path.resolve(__dirname, `../public`), 
            filename: IS_PRD ? "[name]@[hash].js" : "[name]@null.js",
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: ExtTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: !IS_PRD
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(sass|scss)$/,
                    loader: ExtTextPlugin.extract('happypack/loader?id=css')
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
        plugins: [
            new WebpackEventHooks({
                onAfterEmit: (compilation) => {
                    let files = [];
                    let version = '';
                    for(let fileName in compilation.assets) {
                        files.push(fileName)
                    }
                    files.forEach(file => {
                        version += file.replace(/@(.*)(\.css|\.js)/, '$2#$1') + "\n";
                    })
                    fs.writeFile(path.resolve(__dirname, '../bin/ver'), version, (err) => {
                        if(err) {
                            throw new Error('写入 /bin/ver 失败')
                        }
                        console.log('version ===> ')
                        console.log(version)
                    })
                }
            })
        ]
    }
]