const crypto = require('crypto');
const secret = 'thisissecret';
const algorithm = 'sha256';
function getHash(text) {
    const hash = crypto.createHmac(algorithm, secret)
    .update(text)
    .digest('hex');
    return hash;
}
console.log(getHash('javascript'));