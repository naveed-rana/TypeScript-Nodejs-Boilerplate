"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersSchema_1 = require("../models/usersSchema");
//login controller
exports.getLogin = (req, res) => {
    if (req.user) {
        res
            .status(200)
            .json(req.user);
    }
};
//logout controller
exports.LogoutUser = (req, res) => {
    req.logout();
    res
        .status(200)
        .json("succefully logout!");
};
//Auth controller
exports.authUser = (req, res) => {
    if (req.isAuthenticated()) {
        res
            .status(200)
            .json(req.user);
    }
    else {
        res
            .status(401)
            .json('user is not logged in!');
    }
};
//SignUp controller
exports.signUpPost = (req, res) => {
    let newUser = new usersSchema_1.default(req.body);
    newUser.save((err, user) => {
        if (err) {
            res
                .status(500)
                .json("error has been occored!");
        }
        else {
            res
                .status(200)
                .json(req.user);
        }
    });
};
//# sourceMappingURL=userControllers.js.map