const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: String,
    content: String,
    comments: [
      {
        name: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;
