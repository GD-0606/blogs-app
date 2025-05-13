const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://gddev2022:060621@simpleshare-dashboard.yonui.mongodb.net/",
      { dbName: "blogs" }
    )
    .then((res) => {
      console.log("connected");
    });
};

module.exports = connectDB;
