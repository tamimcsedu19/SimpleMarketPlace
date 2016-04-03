/**
 * Created by tamim on 4/3/16.
 */

'use-strict'

var User = require('../Model/User');
var Product = require('../Model/Product');
var Cart = require('../Model/Cart');
var Category = require('../Model/Category');

var cart1 = new Cart({});
var cart2 = new Cart({});


cart1.save(function (err) {
    var user1 = new User({
        email:  'tamim.tamim1382@gmail.com',
        name:   'Tamim Addari',
        cart: cart1._id
    });

    user1.save();

});

cart2.save(function (err) {

    var user2 = new User({
        email: 'rak13th@gmail.com',
        name: 'Rakib Ahsan',
        cart: cart2._id
    });
    user2.save();
});





var category1= new Category({

    name:       "Food",
    parent:     "root",
    ancestor:   ["root"]

});

var category2= new Category({

    name:       "Fruits & Vegetables",
    parent:     "Food",
    ancestor:   ["root","Food"]

});
var category3= new Category({

    name:       "Fresh Fruits",
    parent:     "Fruits & Vegetables",
    ancestor:   ["root","Food","Fruits & Vegetables"]

});

var category4= new Category({

    name:       "Fresh Vegetables",
    parent:     "Fruits & Vegetables",
    ancestor:   ["root","Food","Fruits & Vegetables"]

});

category1.save();
category2.save();
category3.save();
category4.save();



var product1 = new Product({

    name:       "Malta",
    unitPrice:  140,
    category: category3._id

});
var product2 = new Product({

    name:       "Coconut",
    unitPrice:  55,
    category: category3._id

});
var product3 = new Product({

    name:       "Onion",
    unitPrice:  21,
    category:  category4._id

});
product1.save();
product2.save();
product3.save();

