// config/connection.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

// Using useNewUrlParser: true and useUnifiedTopology: true
// ensures that your Mongoose connection to MongoDB is using the latest and most reliable methods 
// for parsing connection strings and managing connections. 
// This helps avoid deprecation warnings and improves the overall stability of your application.