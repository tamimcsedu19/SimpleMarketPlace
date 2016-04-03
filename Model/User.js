'use-strict'


var mongoose = require("../DataAccess/DbConnection");
var Schema = mongoose.Schema;
var Cart = require('./Cart');

var userSchema = new Schema({

    email:  String,
    name:   String,
    cart:   {type: String,ref:'Cart'}

});


var User = mongoose.model('User', userSchema);
module.exports = User;






