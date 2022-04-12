import React, { useEffect, useState } from "react";
import List from "../../components/List";
import {
  Button,
  Content,
  Heading,
  HomeWrapper,
  Input,
  InputContainer,
} from "./index.styled";
import { useNavigate } from "react-router-dom";
import Add from "../../containers/Add";

function Home({ todos = [], setTodos }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const deleteItem = (pos) => {
    setTodos(todos.filter((item, index) => {
      return index != pos;
    }))
  };

  return (
    <div className="container">
      <HomeWrapper>
        <Content>
          <h1>Home</h1>
          <Add setTodos={setTodos} todos={todos} />

          <div>
            {todos.map((item, index) => {
              return <List todo={item} onClick={() => deleteItem(index)} />;
            })}
          </div>
        </Content>
      </HomeWrapper>
    </div>
  );
}

export default Home;
