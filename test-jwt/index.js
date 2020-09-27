const jwt = require('jsonwebtoken');

const SECRET = 'ahihi';

let token = jwt.sign({
    userId: '81728718aghs',
    name: 'John',
    roles: [
        'writer',
        'moderator'
    ]
}, SECRET, {
    expiresIn: '7d'
});

console.log(token);