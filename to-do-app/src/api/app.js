const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users'); // Import the users router

const app = express();
const API_PORT = process.env.PORT || 5001; // Change the port number to 5001 or any other available port


// MongoDB connection
mongoose.connect('mongodb+srv://brolc79:e5B6vx3g@todoapp.pgn3aq6.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp', { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes
app.use('/api', usersRouter); // Mount the users router

// Start server
app.listen(API_PORT, () => console.log(`Server listening on port ${API_PORT}`));

module.exports = app;
