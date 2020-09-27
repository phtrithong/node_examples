const mongoose = require('mongoose');

const opts = { 
    toJSON: { 
        virtuals: true 
    } 
};

const userSchema = mongoose.Schema({
  _id: Number,
  email: String
}, opts);

// Create a virtual property `domain` that's computed from `email`.
userSchema.virtual('domain')
.get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});

const User = mongoose.model('User', userSchema);

const doc = new User({ 
    _id: 1, 
    email: 'test@gmail.com' 
});

// doc.toJSON().domain; // 'gmail.com'

// {"_id":1,"email":"test@gmail.com","domain":"gmail.com","id":"1"}
console.log(JSON.stringify(doc))

// To skip applying virtuals, pass `virtuals: false` to `toJSON()`
console.log(doc.toJSON({ virtuals: false })) // undefined
