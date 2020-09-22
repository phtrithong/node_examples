process.on('message', (msg) => {
    console.log('[Child] Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ });
}, 1000);