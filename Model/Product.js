
'use-strict'
var mongoose = require("../DataAccess/DbConnection");
var Schema = mongoose.Schema;
var Category = require('./Category');

var productSchema = new Schema({

    name:       String,
    unitPrice:  Number,
    category:   {type: String,ref:'Category'}

});


var Product = mongoose.model('Product', productSchema);

module.exports = Product;

