const mongoose = require('mongoose');

const Card = mongoose.model('Card' , {
    name:  String,  
    quote: String,
    image: String,
    color: String
    

});


module.exports = Card;