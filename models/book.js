const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  product_id: { type: String, required: true },
  authors: { type: Array, required: true },
  synopsis: {type:String, required:true},
  link: {type:String, required:true},
  image: {type:String, required:true}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
