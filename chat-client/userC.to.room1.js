require('dotenv').config();

const io = require('socket.io-client');

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN2FiOTVkOGQ5NjI1NjgwNGJhNmEyZCIsImVtYWlsIjoidXNlckNAdGVzdC5jb20iLCJpYXQiOjE2MDE4Nzk3MzksImV4cCI6MTYwMjQ3OTczOX0.0JT2uJPvSx2kmhHdkOSc-HgrQsGMuZ9queiDWpfAG_0';

let socket = io('http://localhost:3000', {
    query: 'token=' + token
});

let count = 0;

socket.on('connect', () => {
    setInterval(() => {
        socket.emit('message', {
            to: '5f7abaeab2ae30689572728f',
            msg: 'message from user C time' + (++count).toString(),
        });
    }, 2* 1000)
});

socket.on('disconnect', () => {
    process.exit();
});
