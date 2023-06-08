const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_DB_CONFIG } = require("./config/app.config");
const cors = require('cors');

// Connection to MongoDB
mongoose.connect(MONGO_DB_CONFIG.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(MONGO_DB_CONFIG.DB);
    console.error('Error connecting to MongoDB:', error);
  });








// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});




