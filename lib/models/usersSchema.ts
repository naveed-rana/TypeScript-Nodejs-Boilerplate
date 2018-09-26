import * as mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

var usersModels = mongoose.model('users', userSchema);

export default usersModels;