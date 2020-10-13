const router = require('express').Router();

const routes2 = require('./router2');

// router.get('/', (req, res) => {
//     res.json('ahihi');
// });

router.use('/:user',
    (req, res, next) => {
        console.log(req.params);
        req.locals = req.params;
        next();
    },
    routes2
);

module.exports = router;