const { SchameTypes } = require('mongoose');
module.exports = class extends think.Mongoose {
  get schema() {
    return {
      id: { type: String },
      pid: { type: String },
      nickname: { type: String, trim: true },
      username: { type: String, lowercase: true, trim: true },
      email: { type: String, trim: true, default: '' },
      password: { type: String, trim: true },
      register_time: { type: Date, default: Date.now }
    }
  }
}