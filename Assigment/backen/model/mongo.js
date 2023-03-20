const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'egco427';

let db;

function connect() {
  return MongoClient.connect(url, { useUnifiedTopology: true })
    .then((client) => {
      console.log('Connected to MongoDB');
      db = client.db(dbName);
    });
}

function get() {
  if (!db) {
    throw new Error('MongoDB is not connected');
  }
  return db;
}

module.exports = {
  connect,
  get,
};
