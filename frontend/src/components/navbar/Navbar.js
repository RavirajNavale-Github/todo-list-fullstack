import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <h1>Todo App</h1>
        </div>
        <div className="nav-menu">
            <ul>
                <Link to='/'><li>Todos</li></Link>
                <Link to='/addTodo'><li>Add Todo</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar