const mongoose = require("mongoose");

//Create Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

//Model
const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo
