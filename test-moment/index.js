// Unix Epoch Time : the numbers of secons since Jan 1st 1970 midnight
const timestamp = 1504721767;
const timestampDate = new Date(timestamp * 1000);
let day = timestampDate.getDay();
let month = timestampDate.getMonth();
let date = timestampDate.getDate();
let year = timestampDate.getFullYear();
//target output is 'Wed Sep 06 2017'
// console.log(`${day} ${month} ${date} ${year}`)
//actual output is
// 3 8 6 2017

const moment = require('moment');
// console.log(moment().locale('ko'))
console.log(moment().utcOffset(7).format("ddd MMM DD YY"));

console.log(moment().utcOffset(6).format('ddd MMM DD YY kk:mm:ss'));