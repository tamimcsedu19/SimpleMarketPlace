/**
 * Created by tamim on 4/3/16.
 */

'use-strict'
var mongoose = require("../DataAccess/DbConnection");
var Schema = mongoose.Schema;


var cartSchema = new Schema({
    products:   Array
});


var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

