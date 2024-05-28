const express = require("express");
const {
  handleAddTodo,
  handleGetAllTodos,
  handleGetTodoById,
  handleUpdateTodoById,
  handleDeleteTodoById,
} = require("../controller/todoController");

//using router method by express
const router = express.Router();

router.route("/").post(handleAddTodo).get(handleGetAllTodos);

router
  .route("/:id")
  .get(handleGetTodoById)
  .put(handleUpdateTodoById)
  .delete(handleDeleteTodoById)

module.exports = { router };
