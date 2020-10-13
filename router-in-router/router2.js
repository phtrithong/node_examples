const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.locals);
    res.json('ahihi');
});

// router.use('/users', routes2);

module.exports = router;