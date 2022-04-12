import React, { useEffect, useState } from "react";
import { Button, Heading, HomeWrapper, Input, InputContainer } from "./index.styled";
import { useNavigate } from "react-router-dom";

function Add({ todos, setTodos }) {

  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("App", todos);
  }, [todos]);

  return (
    <HomeWrapper>
      <InputContainer>
        <Input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="Enter todo"
        />
        <Button variant="primary"
          onClick={() => {
            let arr = [...todos, todo];
            setTodos(arr);
          }}
        >
          Add
        </Button>
      </InputContainer>
    </HomeWrapper>
  );
}

export default Add;
