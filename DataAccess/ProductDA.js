/**
 * Created by tamim on 4/3/16.
 */

var Product = require('../Model/Product');
var fuzzy = require('fuzzy');


exports.addProduct = function(productData,callback){

    var product = new Product(productData);
    product.save(callback);

}

exports.updateProduct = function (productId,data,callback) {
    var condition = { id: productId };
    var update =  { $set: data };

    Product.update(condition,update,callback);
}

exports.getProductDetails = function (productId,data,callback) {

    Product.findOne({id: productId}, function (err, foundProduct) {

        if (err)
            return callback(err,null);
        else
            return callback(null,foundProduct);


    });

}
exports.findProductsMatching= function (text,callback) {

    Product.find(function(err,products){

        var options = {
            extract: function(product) { return product.name; }
        };
        var results = fuzzy.filter(text,products,options);
        var matched_products = []

        for(var i in results){

            matched_products.push(results[i].original);
        }


        callback(null,matched_products);


    });

}

exports.findProductsMatching('Onin', function (err,products) {
    console.log(products);

})
