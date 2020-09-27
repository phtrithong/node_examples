const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});
// Create a virtual property `fullName` with a getter and setter.
userSchema.virtual('fullName')
.get(function() { return `${this.firstName} ${this.lastName}`; })
.set(function(v) {
  // `v` is the value being set, so use the value to set
  // `firstName` and `lastName`.
  
  const firstName = v.substring(0, v.indexOf(' '));
  const lastName = v.substring(v.indexOf(' ') + 1);

  this.set({ 
    firstName, 
    lastName 
  });
});

const User = mongoose.model('User', userSchema);

const doc = new User();
// Vanilla JavaScript assignment triggers the setter
// doc.fullName = 'Jean-Luc Picard';

doc.fullName; // 'Jean-Luc Picard'
doc.firstName; // 'Jean-Luc'
doc.lastName; // 'Picard'

doc.fullName = 'Thong Phan';

console.log(doc);
//   {
//     _id: 5f69ac9df0a4972ebf0c222d,
//     firstName: 'Jean-Luc',
//     lastName: 'Picard'
//   }
console.log(doc.fullName);
// Jean-Luc Picard