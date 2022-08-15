import React, { useState } from "react";
import styled from "styled-components";


const StyledNavigateButton = styled.button`
  padding: 5px 10px;
  margin: 0px 10px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  border: 0px;
  font-size: 18px;
  background-color: ${props => props.backgroundColor || "#ECECEC"};
  color: ${props => props.color || "#000000"};

  &:hover{
    background-color: #000000;
    color: #FFFFFF;
  }
`



export default function NavigateButton(props) {
  return <StyledNavigateButton {...props}/>
};
