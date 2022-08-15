import React from "react";
import styled from "styled-components";


const StyledFormContainer = styled.div`
  line-height: 1.15;
  --primary: #0000ff;
  --secondary: #5efc8d;
  --light-gray: #cccccc;
  font-family: Helvetica;
  height: 100vh;
  width: 30%;
  padding: 30px;
  background: #FFCA7A;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 50px 20px;
  box-shadow: 4px -9px 11px rgba(0, 0, 0, 0.07);
  border-radius: 0px 60px 0px 0px;
`

export default function FormContainer(props) {
  <StyledFormContainer>{props.children}</StyledFormContainer>
}
