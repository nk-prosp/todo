import React, { useEffect, useState } from "react";
import List from "../../components/List";
import { Button, HomeWrapper, Input, InputContainer } from "./index.styled";
import {useNavigate} from 'react-router-dom'


function Home({todos=[]}) {

  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <h1>Home</h1>
      {
          todos.map((item, index) => {
              return <List key={index} todo={item}/>
          })
      }
      <Button
          onClick={() => {
            navigate("/add")
          }}
        >
          Add New
        </Button>
    </HomeWrapper>
  );
}

export default Home;
