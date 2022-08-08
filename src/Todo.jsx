import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import TextField from "./components/TextField.jsx"
import ButtonPrimary from "./components/ButtonPrimary.jsx"
import Task from "./components/Task.jsx"


const StyledWraperTexField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px 30px 0px;
`

export default function Todo(props) {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [complities, setComplities] = useState([]);

  function handleFromSubmit(event) {
    event.preventDefault();
    setTodos([...todos, {task:task, description:description, id: uuid()}]);
    setTask("")
    setDescription("")
    // console.log(todos)
  }

  function handleTaskChange(e) {
    setTask(e.target.value)
  }


  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleDoneClick(id) {
    setComplities(todos.filter((todo) => {
      return todo.id !== id
    }));
    console.log(complities)

  }




  return (
    <>
      <form onSubmit={handleFromSubmit}>
        <StyledWraperTexField>
          <label htmlFor="task">Какая задача</label>
          <TextField
              type="text"
              name="task"
              value={task}
              placeholder="Заверстать форму"
              onChange={handleTaskChange}
            />
        </StyledWraperTexField>
        <StyledWraperTexField>
          <label htmlFor="description">Описание задачи</label>
          <TextField
              type="text"
              name="description"
              value={description}
              placeholder="Незабыть отправить"
              onChange={handleDescriptionChange}
            />
        </StyledWraperTexField>
        <ButtonPrimary
            type="submit"
            value="Добавить задачу"
        />
      </form>
      <div>{todos.map((todo) => (
          <div>
            <Task key={todo.id} id={todo.id} info={todo} />
            <button className="item-button" onClick={() => handleDeleteClick(todo.id)}>
              Удалить
            </button>
            <button className="item-button" onClick={() => handleDoneClick(todo.id)}>
              Выполнено
            </button>
          </div>
        ))}
      </div>
      <div>Выполнено:{complities.map((complitie) => (
          <div>
            <Task key={uuid()} id={uuid()} info={complitie} />
          </div>
        ))}
      </div>
    </>
  );
}
