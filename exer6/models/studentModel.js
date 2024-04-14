const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
});

module.exports = mongoose.model('Student', studentSchema);
