const app = require('express')();

const routes1 = require('./router1');

// app.get('/', (req, res) => {
//     res.json('ahihi');
// })

app.use('/v1', routes1);

app.listen(4000);