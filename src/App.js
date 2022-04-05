import { useEffect, useState } from "react";
import Home from "./containers/Home";
import logo from "./logo.svg";
import Add from "./containers/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
