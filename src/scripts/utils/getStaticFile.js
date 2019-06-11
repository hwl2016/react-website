const fs = require('fs')
const path = require('path')
const versionString = fs.readFileSync(path.resolve(__dirname, '../../../bin/ver'), "utf-8");
const versionArr = versionString.trim().split('\n');
let version = {};
versionArr.forEach(item => {
    let i = item.split('#');
    version[i[0]] = i[1]
})

module.exports = function getStaticFile(file, type) {
    let ver = version[`${file}.${type}`];
    return `/static/${file}@${ver}.${type}`
}