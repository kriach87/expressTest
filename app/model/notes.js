const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  date: String,
  author: String,
  text: String,
});

module.exports = mongoose.model('Note', NoteSchema);
