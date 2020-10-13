require('dotenv').config();
const fs = require('fs');

const io = require('socket.io-client');

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2FjMjUwYjk5Y2RlNzNmZjY3Y2Q4ZSIsImVtYWlsIjoidXNlckFAdGVzdC5jb20iLCJpYXQiOjE2MDE4ODA4NzcsImV4cCI6MTYwMjQ4MDg3N30.KYROuUQoceDt0h0gXPg3cZZBybHReLSTZItE7GbxddE';


let socket = io('http://localhost:3000', {
    transports: ['websocket'],
    query: 'token=' + token
});

let count = 0;

socket.on('connect', () => {
    setInterval(() => {
        socket.emit('message', {
            chatRoom: '5f7ac2cbb99cde73ff67cd92',
            chatContent: {
                chatType: 'txt',
                value: 'ahihi'
            },
        });
        
    }, 2* 1000)
});



socket.on('disconnect', () => {
    process.exit();
});
