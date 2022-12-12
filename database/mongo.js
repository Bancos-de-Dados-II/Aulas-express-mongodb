const { MongoClient } = require('mongodb');

//TODO: Recuperar direto do .env
const client = new MongoClient('mongodb://localhost:27017');

module.exports = client;