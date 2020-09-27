const mongoose = require('mongoose');

// Define the schema
const blogSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
});

// The permitted SchemaTypes are: 
// String, Number, Date, Buffer, Boolean, 
// Mixed, ObjectId, Array, Decimal128, Map

// Create the model
const Blog = mongoose.model('Blog', blogSchema);

// let blog = new Blog();
// console.log(blog);


// Schema.methods
console.log(blogSchema.methods);

// console.log(blogSchema.path('_id'));



// Query helpers
animalSchema.query.byName = function(name) {
  return this.where({ 
    name: new RegExp(name, 'i') 
  })
};

const Animal = mongoose.model('Animal', animalSchema);

Animal.find().byName('fido').exec((err, animals) => {
  console.log(animals);
});

Animal.findOne().byName('fido').exec((err, animal) => {
  console.log(animal);
});