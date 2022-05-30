const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan'); // curl
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');




// load config 
require('dotenv').config();
// passport config
require('./config/passport')(passport);


// passport config 

const app = express()


//  middleware 
app.use(morgan('dev'));
app.set('view engine', '.ejs');

// sessions middleware 
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());


//  controllersMiddleware
app.use('/', require('./controllers/index'));
app.use('/', require('./controllers/auth'));




//  public folder 
app.use('/public', express.static('public'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', () => { console.log('error') })
db.on('connected', () => { console.log('Mongo is connected') })
db.on('disconnected', () => { console.log('Mongo is disconnected') })






const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})