import React from 'react'
import styled from 'styled-components'

function List({todo, onClick}) {
  return (
    <Item onClick={onClick}>
      <Para>{todo}</Para>
      <ButtonContainer>

      </ButtonContainer>
    </Item>
  )
}

export default List


const Item = styled.div`
padding: 5px;
background: #457878;
width: 250px;
margin: 5px;
border-radius: 3px;
color: #fff;
`

const Para = styled.p`

`
const ButtonContainer = styled.div`


`
