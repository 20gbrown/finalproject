// src/index.js

require('dotenv').config();
const config = require('./config/config');

const mongodbUri = process.env.MONGODB_URI || config.database.uri;

// Now you can use 'mongodbUri' to connect to your Azure Cosmos DB MongoDB instance.
