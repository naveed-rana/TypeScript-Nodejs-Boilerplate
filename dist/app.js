"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const passport = require("passport");
const Passport_1 = require("./config/Passport");
const users_1 = require("./routes/users");
var dbURI = require('./config/key');
//creating App
const App = express();
App.use(bodyParser.urlencoded({ extended: true }));
// Body Parser implement
App.use(bodyParser.json());
App.use(session({ secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@", resave: true, saveUninitialized: true }));
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
Passport_1.default();
//routes
App.use('/user', users_1.default);
App.get('/', (req, res) => {
    res.send({ hi: "Hi" });
});
//serve static files
App.use(express.static('./build'));
//export App
exports.default = App;
//# sourceMappingURL=app.js.map