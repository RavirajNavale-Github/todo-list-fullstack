import React, { useEffect, useState } from "react";
import "./EditTodo.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  //get todo with passed id
  const getTodoById = async () => {
    const res = await axios.get(`http://localhost:5000/todo/${id}`);
    // console.log(res.data.data)

    if (res.data.success) {
      setTitle(res.data.data.title);
      setCategory(res.data.data.category);
    } else {
      alert("Unable to get the todo.");
    }
  };

  useEffect(() => {
    getTodoById();
  }, []);

  //Send Update Todo to backend
  const handleEdit = async (e) => {
    e.preventDefault();

    try { 
      const res = await axios.put(`http://localhost:5000/todo/${id}`, {
        title,
        category,
      });
      // console.log(res.data);
      // alert("Todo Updated Successfully.");
      navigate("/");
    } catch (error) {
      alert("Failed to Update Todo", error.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Edit Todo</h1>
      <form className="form" onSubmit={handleEdit}>
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
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
};

export default EditTodo;
