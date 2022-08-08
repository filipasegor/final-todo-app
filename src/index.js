import React from "react";
import { render } from "react-dom";
import Todo from "./Todo.jsx";
import "./index.css";

function App() {
  return <Todo />;
}

render(<App />, document.querySelector("#root"));
