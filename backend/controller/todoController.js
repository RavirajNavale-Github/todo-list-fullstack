const Todo = require("../model/todoModel");

//Create new todo
const handleAddTodo = async (req, res) => {
  try {
    const { title, category } = req.body;
    const newTodo = new Todo({ title, category });
    await newTodo.save();
    return res.status(201).send({
      success: true,
      message: "New Todo added in Database.",
      data: newTodo,
    });
  } catch(err){
    return res.status(500).send({ success: false, message: err.message });
  }
};

//get all todo
const handleGetAllTodos = async (req, res) => {
  const todos = await Todo.find();

  if (todos < 1) {
    return res
      .status(404)
      .send({ success: false, message: "No todos in Database." });
  } else {
    return res.status(200).send({
      success: true,
      message: "All todos from Database.",
      data: todos,
    });
  }
};

//get todo by ID
const handleGetTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id ${id} not found in database.`,
      });
    } else {
      return res.status(200).send({
        success: true,
        message: `Todo with id ${id} Found in Database.`,
        data: todo,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to get todo." });
  }
};

//Update todo
const handleUpdateTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, category } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, category },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id ${id} not found in database.`,
      });
    } else {
      return res.status(200).send({
        success: true,
        message: `Todo with id ${id} Updates successfully.`,
        data: updatedTodo,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to update todo." });
  }
};

//Delete todo
const handleDeleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id ${id} not found in database.`,
      });
    } else {
      return res.status(200).send({
        success: true,
        message: `Todo with id ${id} Deleted successfully.`,
        data: deletedTodo,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Unable to Delete todo." });
  }
};

module.exports = {
  handleAddTodo,
  handleGetAllTodos,
  handleGetTodoById,
  handleUpdateTodoById,
  handleDeleteTodoById,
};
