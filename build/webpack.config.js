module.exports = [
    // {
    //     name: 'node'
    // },
    {
        name: 'browser',
        entry: {

        },
        output: {

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
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [

        ]
    }
]