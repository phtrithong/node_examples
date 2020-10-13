const fs = require('fs');

const imageToBase64 = require('image-to-base64');
imageToBase64("./dog.jpeg") // Path to the image
  .then(
      (response) => {
        //   console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        fs.writeFile('./save.txt', response, (err, data) => {
            if(err) {
                console.log(err);
            }
        })
      }
  )
  .catch(
      (error) => {
          console.log(error); // Logs an error if there was one
      }
  )