const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  task : String,
  status : Number
})

module.exports = mongoose.model('todo',todoSchema);
