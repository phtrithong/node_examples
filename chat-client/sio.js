const io = require('socket.io-client');



const rl = require('readline-sync');

// console.log('Choose chat room to follow')
// let room = rl.question('Room?\n');
let rooms = ['room1', 'room2', 'room3'];
let socket = io('http://localhost:3000');

socket.on('connect', () => {
    socket.emit('join_room', rooms);
});

rooms.forEach(room => {
    socket.on(room, data => {
        console.log(`time: ${data.time}, user: ${data.user}, room: ${data.room}, msg: ${data.msg}`);
        // console.log(data);
    });
})

socket.on('disconnect', () => {
    console.log('disconnected');
});

socket.on('notification', notifications => {
    console.log(notifications);
})