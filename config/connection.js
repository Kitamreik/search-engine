const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//Use mongoose.connect() to make your connection to your local MongoDB server.
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL)};
//For the first parameter of the connect() method, put in the actual MongoDB connection string 