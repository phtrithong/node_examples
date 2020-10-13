const axios = require('axios');

axios({
    method: 'get',
    url: 'https://elastictelemetry.ddns.net'
})
.then(res => {
    console.log('here')
    console.log('res', res);
})
.catch(err => {
    console.log('err: ' , err)
})