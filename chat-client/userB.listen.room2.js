const io = require('socket.io-client');


let rooms = [
    '5f721d9567077c515b28b523'
];

let token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2FiOTU0OGQ5NjI1NjgwNGJhNmEyYyIsImVtYWlsIjoidXNlckJAdGVzdC5jb20iLCJpYXQiOjE2MDE4Nzk3MDMsImV4cCI6MTYwMjQ3OTcwM30.w1fbyN7Wz784-UyAz3HNuW2nRqgJUW5K0xriFQOFEdE';

let socket = io('http://localhost:3000', {
    query: 'token=' + token
});

socket.on('connect', () => {
    rooms.forEach(room => {
        socket.on(room, data => {
            console.log(`time: ${data.time}, user: ${data.user}, room: ${data.room}, msg: ${data.msg}`);
            // console.log(data);
        });
    })
});



socket.on('disconnect', () => {
    console.log('disconnected');
});

socket.on('notification', notifications => {
    console.log(notifications);
})