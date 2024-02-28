const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const bodyParser = require('body-parser');
const path = require('node:path');
const app = express();
const PORT = 3000;
//needed

//MongoDB connection without env 
//const mongoURI = '';


//Use mongoose.connect() to make your connection to your local MongoDB server.
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURI);
  console.log("mongoDB connected")

};
//For the first parameter of the connect() method, put in the actual MongoDB connection string 


// Define a schema and model for the pages
const pageSchema = new mongoose.Schema({
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
});
