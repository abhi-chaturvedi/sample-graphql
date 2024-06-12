const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing');

mongoose.connection.once('open', () => {
    console.log('Connected to the database');
  }).on('error', (error) => {
    console.error('Connection error:', error);
  });