var mongoose = require('mongoose');

var moviesSchema = new mongoose.Schema({

    name: String,
    image: String,
    banner: String,
    trailer: String,
    desc: String,
    genre: String,
    director: String,
    date: String,
    runtime: String,
    score: Number,
    type: String,

    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
});

module.exports = mongoose.model('movies', moviesSchema);