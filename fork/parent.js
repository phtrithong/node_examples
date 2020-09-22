const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
  console.log('[Parent] Message from child', msg);
});

// use send method to exchange messages
forked.send({ hello: 'world' });