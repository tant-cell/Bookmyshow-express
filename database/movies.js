const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    id:Number,
   title:String,
   actor:String 

});

const MovieModel = mongoose.model("movies" ,MovieSchema);

module.exports = MovieModel;