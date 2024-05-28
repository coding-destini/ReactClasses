// src/server.js
const express = require('express');
require('dotenv').config();
const mongoose = require('./config/mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/taskRoutes'))


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
