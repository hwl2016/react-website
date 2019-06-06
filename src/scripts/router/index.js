const express = require('express');
const router = express.Router();

router.get('/aaa', (req, res) => {
    res.json({
        ret: true,
        data: {
            x: 1, y: 2
        }
    })
})

module.exports = router;
