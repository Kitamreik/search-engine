require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 3000;
//needed

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

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(path.join(__dirname, "js"))); //test

require('./config/connection');

app.get('/', async (req, res, next) => {
    //res.status(200).json({success: {message: "Index successful"}, statusCode: 200}); //to test
    res.render('pages/index');
})

//search route
app.get('/search', async (req, res, next) => {
    //res.status(200).json({success: {message: "Searching..."}, statusCode: 200}); //to test
    
    try {
        const searchTerm = req.query.q;
        const pages = await Page.find({
            searchTerm //default, will find all entries
        })
        res.json(pages);


        //MVP result: using  http://localhost:3000/search? to trigger the search route  
        
        //end result: http://localhost:3000/search?q=your_search_term
    } catch (err) { //err handling done
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

//server operational
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("mongoDB connected");
});
module.exports = Page;