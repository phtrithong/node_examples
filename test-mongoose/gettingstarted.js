const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', () => {
    console.log('error');
})

db.once('open', () => {
    console.log('connection establish');
});

const kittySchema = new mongoose.Schema({
    name: String
})

// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'



kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
}
  
const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// <instance of model>.save()
// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

// Model.find()
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})