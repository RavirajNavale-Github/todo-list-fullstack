import React, { useEffect, useState } from "react";
import "./Todos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, [todos]);

  const getAllTodos = async () => {
    try {
      const res = await axios("http://localhost:5000/todo");
      // console.log('res.data: ',res.data.data);
      setTodos(res.data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/todo/${id}`);
    console.log(res)
    
    if(res.status !== 200){
      alert('Failed to Delete the todo')
    } else{
      alert('Todo removed successfully');
    }
  }

  return (
    <div className="card-container">
      {todos.map((todo) => (
        <div className="card-content" key={todo._id}>
          <div className="card-title-category">
            <h2>{todo.title}</h2>
            <p>Category: {todo.category}</p>
          </div>
          <div className="card-btn">
           <button type="button" className="edit-btn"><Link to={`/${todo._id}`}>Edit</Link></button>
            <button type="button" onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
