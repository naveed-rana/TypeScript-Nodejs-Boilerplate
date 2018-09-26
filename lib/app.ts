import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as session from 'express-session';
import * as cookieparser from 'cookie-parser';
import * as passport from 'passport';
import setuppassport from './config/Passport';
import usersRouter from './routes/users';
var dbURI = require('./config/key');

//creating App
const App = express();
App.use(bodyParser.urlencoded({extended: true}));

// Body Parser implement
App.use(bodyParser.json());
App.use(session({secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@", resave: true, saveUninitialized: true}));

App.use(cookieparser());

//connect with mongoose
mongoose.connect(dbURI, {
    useNewUrlParser: true
}, function (err) {
    if (err) 
        throw err;
    console.log('Successfully connected');
});

//setup cors
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//setup  passports
App.use(passport.initialize());
App.use(passport.session());
setuppassport();

//routes
App.use('/user', usersRouter);

//serve static files
App.use(express.static('./build'));
//export App
export default App;