var Jimp = require('jimp');
 
// open a file called "lenna.png"
Jimp.read('./dog.jpeg', (err, dog) => {
  if (err) throw err;
  dog
    // .resize(46, 46) // resize
    .quality(100) // set JPEG quality
    // .square()
    .write('lena-small-bw.jpeg'); // save
});