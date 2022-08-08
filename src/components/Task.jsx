import React, { useState } from "react";

export default function Task(props) {

  const {info} = props;

  return(
    <>
      <div>
        <h2>{info.task}</h2>
        <p>{info.description}</p>
      </div>
    </>
  );

}
