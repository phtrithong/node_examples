const io = require('socket.io-client');
const rl = require('readline-sync');

const moment = require('moment');


let user = rl.question('User?\n');

let socket = io('http://localhost:3000', {
    query: 'token=' + user
});

socket.on('connect', () => {
    let roomId = rl.question('Room?\n');
    console.log(socket.id + ' connected');
    socket.emit('join_room', [roomId]);
});

socket.on('confirm_join_room', roomId => {
    console.log(`Joined to room ${roomId}`);
    socket.on(roomId, data => {
        inputMsg(socket, user, data.room);
    });

    inputMsg(socket, user, roomId);
    
    // inputMsg(socket, user, room);
});


socket.on('disconnect', () => {
    process.exit();
    // console.log(socket.id + ' disconnected');
});


function inputMsg (socket, user, room) {
    let msg = rl.question('> ');

    socket.emit('message', {
        user,
        room,
        msg,
        time: moment().utcOffset(7).format('ddd,M/DD/YY,kk:mm:ss')
    });

}