const sharp = require('sharp');

sharp('./dog.jpeg')
.resize(100, 100)
.toFile('output.jpg', (err, info) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(info);
    }
});