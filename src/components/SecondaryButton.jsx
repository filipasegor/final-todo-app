import React, { useState } from "react";
import styled from "styled-components";

const StyledSecondaryButton = styled.button`
  padding: 10px;
  margin: 0px 10px;
  background-color: ${props => props.backgroundColor || "#FFFFFF"};
  border: ${props => props.border || "1.5px solid #000000" };
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: ${props => props.color || "#000000"};

  &:hover{
    background-color: #000000;
    color: #FFFFFF;
  }
`


export default function SecondaryButton(props){

  return <StyledSecondaryButton {...props} />
}
