const google=require('passport-google-oauth20').Strategy;

module.exports = function(passport){
    passport.use(new google({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback"

    },
    function(acessToken,refreshToken,profile,done){
        console.log(profile)
    }
    ))
    passport.serializeUser(async(user, done)=> {
        done(null, user);
      });
      
      passport.deserializeUser(async(obj, done) =>{
        done(null, obj);
      });
}