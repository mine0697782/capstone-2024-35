const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const WorksiteSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  address: {
    type: String,
    required: true,
  },
  local: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  worktype: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Worksite', WorksiteSchema);