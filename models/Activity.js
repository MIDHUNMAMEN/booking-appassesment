const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  dateTime: Date,
});

module.exports = mongoose.model('Activity', ActivitySchema);
