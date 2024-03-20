const mongoose = require('mongoose');
const {Schema} = mongoose;
// Define a schema and model for the pages
const pageSchema = new Schema({
    _id: String,
    //title: String,
    //content: String,
    name: String,
    email: String,
    age: Number,
    hobbies: String,
  });
  
const Page = mongoose.model('Page', pageSchema);

module.exports = Page;