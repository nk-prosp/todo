import React, { useEffect, useState } from "react";
import List from "../../components/List";
import { Button, Heading, HomeWrapper, Input, InputContainer } from "./index.styled";
import {useNavigate} from 'react-router-dom'
import Add from "../../containers/Add"

function Home({todos=[]}) {

  const  [value, setValue] =useState('');
  const navigate = useNavigate();
  return (  
    <div className="container">
    <HomeWrapper>
      <h1>Home</h1>
  
        <input
                type="text"
                className="input"
                value={value}
                placeholder="Enter to do Task"
                onChange={e => setValue(e.target.value)}
            />

            <button>
              Add Task 
            </button>
          
      

    </HomeWrapper>
    </div>
  );
}

export default Home;
