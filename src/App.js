import { useEffect, useState } from "react";
import Home from "./containers/Home";
import Add from "./containers/Add";
import About from "./containers/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log("App",todos);
  }, [todos])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home todos={todos} />} />
          <Route path="/add" element={<Add todos={todos} setTodos={setTodos}/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
