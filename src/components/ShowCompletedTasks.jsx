import React, { useState } from "react";
import styled from "styled-components";


const StyledShowCompletedTasks= styled.button`
  padding: 5px 10px;
  margin: 0px 10px;
  border: 1.5px solid #000000;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;

  &:active{
    background-color: #FFCA7A;
    color: #000000;
  }

  &:hover{
    background-color: #000000;
    color: #FFFFFF;
  }
`



export default function ShowCompletedTasks(props) {

  return(
    <StyledShowCompletedTasks onClick={props.onShowCompletedTasks} active={props}>
        Завершенные
    </StyledShowCompletedTasks>
  );
}
