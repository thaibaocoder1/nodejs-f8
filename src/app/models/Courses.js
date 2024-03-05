const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, default: "This is an example title" },
    description: { type: String, default: "This is an example description" },
    thumbnail: {
      type: String,
      default: "https://vtiacademy.edu.vn/upload/images/node-js-2.png",
    },
    videoID: { type: String },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String, default: "This is an example level" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
