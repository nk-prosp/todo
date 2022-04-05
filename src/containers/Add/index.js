import React, { useEffect, useState } from "react";
import { Button, HomeWrapper, Input, InputContainer } from "./index.styled";
import {useNavigate} from 'react-router-dom'


function Add({todos, setTodos}) {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("App",todos);
  }, [todos])

  return (
    <HomeWrapper>
      <h1>Add</h1>
      <InputContainer>
        <Input
          value={todo}
          onChange={(e) => {setTodo(e.target.value)}}
          type="text"
          placeholder="Enter todo"
        />
        <Button
          onClick={() => {
            let arr = [...todos, todo]
            setTodos(arr);
            // setTodos(todos);
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            navigate("/")
          }}
        >
          Home
        </Button>
      </InputContainer>
    </HomeWrapper>
  );
}

export default Add;
