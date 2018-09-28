"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
var usersModels = mongoose.model('users', userSchema);
exports.default = usersModels;
//# sourceMappingURL=usersSchema.js.map