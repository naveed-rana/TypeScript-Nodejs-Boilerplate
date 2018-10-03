"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
const passport_local_1 = require("passport-local");
const usersSchema_1 = require("../../models/usersSchema");
function default_1() {
    passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, function (email, password, done) {
        usersSchema_1.default.findOne({ email: email }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }));
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        usersSchema_1.default.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
exports.default = default_1;
;
//# sourceMappingURL=index.js.map