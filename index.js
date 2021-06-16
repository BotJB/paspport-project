const express=require('express')
const path=require('path')
const dotenv = require('dotenv').config({path:'./config/config.env'})
const session=require('express-session')
const exphbs=require('express-handlebars')
const passport = require('passport')
const authfunc=require('./config/passport')
const app=express()
//set the engine and other stuff
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs',defaultLayout:'main'}));
app.set('view engine', '.hbs');
//COnfig the passport 
authfunc(passport)
//setting up the express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))
//Initialize the passport things
app.use(passport.initialize())
app.use(passport.session())
const auth=require('./routes/googleauth')
const routes=require('./routes/routes')
app.use('/auth',auth)
app.use('/',routes)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})