let router = require('express').Router();

router.get('/',(req,res) => {
    res.send('main express route')
})

module.exports = router;