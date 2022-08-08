import React, { useState } from "react";
import styled from "styled-components";

const ButtonStyled = styled.input`

  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  background: #148F2B;
  margin: ${({margin}) => margin || "0px" };

  &:hover{
    opacity: 0.8;
  }

  &:active{
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

`

export default function ButtonPrimary(props) {

  return <ButtonStyled {...props} />

}
