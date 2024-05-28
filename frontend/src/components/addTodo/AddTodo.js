import React, { useState } from "react";
import "./AddTodo.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  // console.log(title, category);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/todo", {
        title,
        category,
      });
      // console.log(res.data)
      alert('Todo Added Successfully.');
      navigate('/');

    } catch (error) {
      alert("Failed to add Todo", error.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
