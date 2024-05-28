import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/addTodo/AddTodo";
import EditTodo from "./components/editTodo/EditTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todos/>}/>
          <Route path="/addTodo" element={<AddTodo/>}/>
          <Route path="/:id" element={<EditTodo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
