require('dotenv').config();

const io = require('socket.io-client');

const token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzIxZDJmNjcwNzdjNTE1YjI4YjUyMSIsImVtYWlsIjoidXNlckRAdGVzdC5jb20iLCJpYXQiOjE2MDEzNDY1MTksImV4cCI6MTYwMTk0NjUxOX0.BUkNJBBjoP0FVZBOT-CgIOKxstbzqWt14AvuJ_i65Jk';


let socket = io('http://localhost:3000', {
    query: 'token=' + token
});

let count = 0;

socket.on('connect', () => {
    setInterval(() => {
        socket.emit('message', {
            to: '5f721d9567077c515b28b523',
            msg: 'message from user D time' + (++count).toString(),
        });
    }, 2* 1000)
});

socket.on('disconnect', () => {
    process.exit();
});
