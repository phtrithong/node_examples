const app = require('express')();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./keys');

// passport.use(new GoogleStrategy());

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (token, tokenSecret, profile, done) => {
        // console.log(arguments.token);
        // console.log(token);
        // console.log(tokenSecret);
        // console.log(profile);

        if(profile) {
            let id = profile.id;
            
            console.log(id);
            
            if(profile.name) {
                let familyName = profile.name.familyName;
                let givenName = profile.name.givenName;
                console.log(familyName, givenName);
            }
            else {
                console.log('No name');
            };

            let email = profile.emails[0].value;
            console.log(email);
            let avatar = profile.photos[0].value;
            console.log(avatar);
        }
    } )
)

app.listen(3000);

app.get('/auth/google', passport.authenticate('google', {
    scope: [
        'profile',
        'email'
    ]
}));

// callback to get the access token
app.get('/auth/google/callback', passport.authenticate('google'));

