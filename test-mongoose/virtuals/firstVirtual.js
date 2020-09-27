const userSchema = mongoose.Schema({
	email: String
});

// Create a virtual property `domain` that's computed from `email`.
// Virtual property will not be stored in DB

userSchema.virtual('domain')
// Schema#virtual returns a VirtualType object
.get(function() {
	return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

let doc = await User.create({ email: 'test@gmail.com' });
// `domain` is now a property on User documents.
doc.domain; // 'gmail.com'
