const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://brolc79:e5B6vx3g@todoapp.pgn3aq6.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp";

async function fetchData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("todoapp");
    const collection = database.collection("tasks");

    // Find all documents in the collection
    const cursor = collection.find({});

    // Convert cursor to array of documents
    const documents = await cursor.toArray();

    return documents; // Return documents as JSON

  } finally {
    // Ensure the client is closed
    await client.close();
  }
}

async function run() {
  try {
    const data = await fetchData();
    console.log(JSON.stringify(data, null, 2)); // Print JSON to console
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

run();

module.exports = fetchData;