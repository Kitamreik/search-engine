//Ref: https://www.mongodb.com/docs/atlas/atlas-search/tutorial/create-index/
const { MongoClient } = require("mongodb");

// connect to your Atlas deployment
const uri =  
 "mongodb+srv://kitdamreik:search_eng@cluster0.x5rgfhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {

    // set namespace
    const database = client.db("search_engine");
    const collection = database.collection("pages");
    
    // define your Atlas Search index
    const index = {
        name: "default",
        definition: {
            /* search index definition fields */
            "mappings": {
                "dynamic": true
            }
        }
    }

    // run the helper method
    const result = await collection.createSearchIndex(index);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
//To create the index, run the following command: node create-index.js