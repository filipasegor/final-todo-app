import React from "react";
import styled from "styled-components";


const StyledTitle = styled.h1`
  margin: ${({margin}) => margin || "0px"};
  font-size: ${({fontSize}) => fontSize || "60px"};
  font-weight: 600;
`


export default function Title(props) {
  return <StyledTitle {...props} />
}
