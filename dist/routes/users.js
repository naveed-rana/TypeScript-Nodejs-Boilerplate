"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const controllers = require("../controllers/userControllers");
//create router
var router = express.Router();
//check route is working
router.get('/', (req, res) => {
    res.status(200).json("route working!");
});
//route for signup
router.post('/signup', controllers.signUpPost);
//login route
router.post('/login', passport.authenticate('local'), controllers.getLogin);
//logout request
router.post('/logout', controllers.LogoutUser);
//athenticate user
router.post('/authenticate', controllers.authUser);
exports.default = router;
//# sourceMappingURL=users.js.map