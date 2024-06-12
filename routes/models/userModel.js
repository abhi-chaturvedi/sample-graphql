const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  email : String,
  contact : Number,
  todos : [{type : mongoose.Schema.Types.ObjectId , ref : 'todos'}]
})

module.exports = mongoose.model('user',userSchema);
