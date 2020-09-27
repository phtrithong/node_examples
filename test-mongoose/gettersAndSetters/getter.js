const userSchema = new Schema({
    email: {
      type: String,
      get: obfuscate
    }
  });
  
  // Mongoose passes the raw value in MongoDB `email` to the getter
  function obfuscate(email) {
    const separatorIndex = email.indexOf('@');
    if (separatorIndex < 3) {
      // 'ab@gmail.com' -> '**@gmail.com'
      return email.slice(0, separatorIndex).replace(/./g, '*') +
        email.slice(separatorIndex);
    }
    // 'test42@gmail.com' -> 'te****@gmail.com'
    return email.slice(0, 2) +
      email.slice(2, separatorIndex).replace(/./g, '*') +
      email.slice(separatorIndex);
  }
  
  const User = mongoose.model('User', userSchema);
  const user = new User({ email: 'ab@gmail.com' });
  user.email; // **@gmail.com