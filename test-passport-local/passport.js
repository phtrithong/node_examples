const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('./models/user');

// the serializeUser function stores the user._id is the current session
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// deserialize fetch the User with the id stored in the session from the database
// this means whenever we're routing a usrl we don't have to do the whole 
// User.findOne({}) dance to get the current User
passport.deserializeUser(function(user, done) {
    User.findById(_id, function (err, user) {
      done(err, user);
    });
});

passport.use(new localStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
));