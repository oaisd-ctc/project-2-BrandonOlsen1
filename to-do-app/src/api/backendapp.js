const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const usersRouter = require('./routes/users'); // Import the users router
const ejs = require('ejs'); // Import EJS

const app = express();
const API_PORT = process.env.PORT || 5000; // Change the port number to 5000 or any other available port

// MongoDB connection
mongoose.connect('mongodb+srv://brolc79:e5B6vx3g@todoapp.pgn3aq6.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp', );
const db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(cors());
app.use(logger('dev'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define route handler to fetch data from MongoDB
app.get('/api/getData', async (req, res) => {
  try {
    const tasksCollection = db.collection('tasks'); // Replace 'tasks' with your collection name
    const tasks = await tasksCollection.find({}).toArray();
    res.json({ success: true, data: tasks });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, error: "Failed to fetch data" });
  }
});

// Define route handler for root URL
app.get('/', async (req, res) => {
  try {
    const tasksCollection = db.collection('tasks'); // Replace 'tasks' with your collection name
    const tasks = await tasksCollection.find({}).toArray();
    res.render('index', { tasks }); // Render the 'index' template and pass the data
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Failed to fetch data");
  }
});

// Routes
app.use('/api', usersRouter); // Mount the users router

// Start server
app.listen(API_PORT, () => console.log(`Server listening on port ${API_PORT}`));

module.exports = app;
