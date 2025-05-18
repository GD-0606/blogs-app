const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/", { dbName: "blogs" })
    .then((res) => {
      console.log("connected");
    });
};

module.exports = connectDB;
