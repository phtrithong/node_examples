const io = require('socket.io-client');


let rooms = [
    '5f7ac2cbb99cde73ff67cd92'
];

let token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2FjMjVjYjk5Y2RlNzNmZjY3Y2Q4ZiIsImVtYWlsIjoidXNlckJAdGVzdC5jb20iLCJpYXQiOjE2MDE4ODA5MDQsImV4cCI6MTYwMjQ4MDkwNH0.id1jykIIuybWOSW0fMAVBuyvqxfU_f6EmJ2jcroghkE';


let socket = io('http://localhost:3000', {
    query: 'token=' + token,
    transports: ['websocket']
});

socket.on('connect', () => {
    rooms.forEach(room => {
        socket.on(room, data => {
            console.log(data);
            // console.log(`time: ${data[0].time}, user: ${data[0].user}, room: ${data[0].to}, msg: ${data[0].msg}`);
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