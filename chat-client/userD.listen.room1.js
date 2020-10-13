const io = require('socket.io-client');


let rooms = [
    '5f721d4b67077c515b28b522'
];

let token = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzIxZDJmNjcwNzdjNTE1YjI4YjUyMSIsImVtYWlsIjoidXNlckRAdGVzdC5jb20iLCJpYXQiOjE2MDEzNDUyOTksImV4cCI6MTYwMTk0NTI5OX0._QXCqrAq6C8QJEBCYx5lJKUu4X264dBUjDyHF8YjQ9Q';

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