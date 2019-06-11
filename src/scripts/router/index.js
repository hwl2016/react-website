const express = require('express');
const router = express.Router();
const getStaticFile = require('../utils/getStaticFile')

router.get('/api/aaa', (req, res) => {
    res.json({
        ret: true,
        data: {
            x: 1, y: 2
        }
    })
})

router.get('/', (req, res) => {
    res.header("Content-Type", "text/html");
    res.end(getHtml('home'));
})

router.get('/bill', (req, res) => {
    res.header("Content-Type", "text/html");
    res.end(getHtml('bill'));
})

function getHtml(page) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${page}</title>
        <link rel="stylesheet" href="${getStaticFile(page, 'css')}">
    </head>
    <body>
        <div id="root"></div>
        <script src="${getStaticFile(page, 'js')}"></script>
    </body>
    </html>   
    `
}

module.exports = router;
