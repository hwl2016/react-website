const express = require('express');
const router = express.Router();
const getStaticFile = require('../utils/getStaticFile')

router.get('/aaa', (req, res) => {
    res.json({
        ret: true,
        data: {
            x: 1, y: 2
        }
    })
})

router.get('/index', (req, res) => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="${getStaticFile('home', 'js')}"></script>
</body>
</html>
    `;
    res.end(html);
})

module.exports = router;
