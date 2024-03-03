const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  name: { type: String, default: "This is an example title" },
  description: { type: String, default: "This is an example description" },
  thumbnail: {
    type: String,
    default: "https://vtiacademy.edu.vn/upload/images/node-js-2.png",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
