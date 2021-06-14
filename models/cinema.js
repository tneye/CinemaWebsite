var mongoose = require('mongoose');

var cinemaSchema = new mongoose.Schema({
    name: String,
    image: String,
    logo: String,
    mapadd: String,
    slogan: String,
    mapp : String,
});

module.exports = mongoose.model('cinema', cinemaSchema);