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
  //필요한 인원 (number of people required)
  nopr: {
    type: Number,
    required: true,
  },
  //채용 확정된 인원 (a fixed number of people to be hired{nopr과 유사성을 위해 noph로 설정}) 
  noph: {
    type: Number,
    required: false,
  },
  //현장 내용 예. 5시간 작업 예상, 경력자 필수 등
  worksitenote: {
    type: String,
    required: false,
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