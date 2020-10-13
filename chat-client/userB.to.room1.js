require('dotenv').config();

const io = require('socket.io-client');

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2FjMjVjYjk5Y2RlNzNmZjY3Y2Q4ZiIsImVtYWlsIjoidXNlckJAdGVzdC5jb20iLCJpYXQiOjE2MDE4ODA5MDQsImV4cCI6MTYwMjQ4MDkwNH0.id1jykIIuybWOSW0fMAVBuyvqxfU_f6EmJ2jcroghkE';

let socket = io('http://localhost:3000', {
    query: 'token=' + token
});

let count = 0;

socket.on('connect', () => {
    setInterval(() => {
        socket.emit('message', {
            chatRoom: '5f7ac2cbb99cde73ff67cd92',
            chatContent: {
                chatType: 'text',
                value: 'message from user B time' + (++count).toString()
            },
        });
    }, 2* 1000)
});



socket.on('disconnect', () => {
    process.exit();
});
