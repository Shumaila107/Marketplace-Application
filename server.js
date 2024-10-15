const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const dbURI = 'mongodb://localhost:27017/Marketplace';

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Marketplace application." });
});

// Use product routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});