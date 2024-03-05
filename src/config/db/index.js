const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8-education-dev", {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.log("Failed to connect with database", error.message);
  }
}

module.exports = { connect };
