const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: String });

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}

mongoose.connect('mongodb://localhost:27017/test-mongoose', opts);


// Only document middleware
schema.pre('remove', { document: true }, function() {
    console.log('Removing doc!');
});

// Only query middleware. This will get called when you do `Model.remove()`
// but not `doc.remove()`.
schema.pre('remove', { 
    query: true 
}, function() {
    console.log('Removing!');
});

schema.pre('save', () => {
    console.log('Hello from pre save')
});

// Compile a model from the schema
const User = mongoose.model('User', schema);

// Mongoose will **not** call the middleware function, because
// this middleware was defined after the model was compiled
schema.pre('save', () => {
    console.log('Hello from pre save')
});

let user = new User({ 
    name: 'test' 
});

console.log(user);
user.save();