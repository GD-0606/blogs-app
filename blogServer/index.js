const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const blogModel = require("./models/blog.model");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok");
});

app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  await blogModel.create({ title, content });
  res.send("Ok");
});

app.post("/posts/:id/comment", async (req, res) => {
  const { id } = req.params;
  const { name, text } = req.body;
  const data = await blogModel.findOne({ _id: id });

  data.comments.push({ name, text });

  await data.save();

  res.send("Ok");
});

app.get("/posts", async (req, res) => {
  const data = await blogModel.find({});
  res.send(data);
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const data = await blogModel.findOne({ _id: id });
  res.send(data.comments);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
