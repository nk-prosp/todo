import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import {HomeWrapper, Input, InputContainer } from "./index.styled";
import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';
=======
import { Button, Heading, HomeWrapper, Input, InputContainer } from "./index.styled";
import { useNavigate } from "react-router-dom";
>>>>>>> a21801a8a2ac27da816ee2465997436ebecd056d

function Add({ todos, setTodos }) {

  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("App", todos);
  }, [todos]);

  return (
    <HomeWrapper>
      <Heading>Add</Heading>
      <InputContainer>
        <Input
<<<<<<< HEAD
           value={todo}
          onChange={(e) => {setTodo(e.target.value)}}
=======
          onChange={(e) => {
            setTodo(e.target.value);
          }}
>>>>>>> a21801a8a2ac27da816ee2465997436ebecd056d
          type="text"
          placeholder="Enter todo"
        />
        <Button variant="primary"
          onClick={() => {
            // todos.push(todo);
            let arr = [...todos, todo];
            setTodos(arr);
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </InputContainer>
    </HomeWrapper>
  );
}

export default Add;
