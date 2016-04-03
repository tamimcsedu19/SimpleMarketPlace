/**
 * Created by tamim on 4/3/16.
 */
var User = require('../Model/User');
var Product = require('../Model/Product');

exports.addProductToCart = function(email,product,callback){

    User.findOne({email:email}).populate('cart').exec(function (err,user) {

        user.cart.products.push(product);
        user.cart.save();
        
    });

}




exports.addProductToCart('tamim.tamim1382@gmail.com',{

    name:       "Onion",
    unitPrice:  21,
    quantity :  2

}, function (err) {

});