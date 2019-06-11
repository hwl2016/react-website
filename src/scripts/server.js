const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const server = express();
const router = require('./router')

server.use(bodyParser.json({limit: '2000KB'}));
// app.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '../../public')));
server.use("/static", express.static(path.join(__dirname, '../../public')))
server.use(compression());
server.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Powered-By', 'huwl');
    next();
});

server.use('/', router);

module.exports = server;