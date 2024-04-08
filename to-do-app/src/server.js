
app.get('/api/tasks', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("todoapp");
    const collection = database.collection("tasks");

    // Find all documents in the collection
    const cursor = collection.find({});

    // Convert cursor to array of documents
    const tasks = await cursor.toArray();

    res.json(tasks); // Send tasks as JSON response

  } finally {
    await client.close();
  }
});
