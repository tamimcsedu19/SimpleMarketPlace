
'use-strict'
var mongoose = require("../DataAccess/DbConnection");
var Schema = mongoose.Schema;


var categorySchema = new Schema({

    id:         String,
    name:       String,
    parent:     String,
    ancestor:   Array

});

var Category = mongoose.model('Category', categorySchema);




module.exports = Category;

