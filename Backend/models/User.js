const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  email: { type: String, required: true },
  adress: String,
  date: { type: Date, default: Date.now },
});
module.exports = User = mongoose.model("UserCollection", userSchema);
