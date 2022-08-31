import Todo from "./Todo";
import styled from "styled-components";
import uuid from "react-uuid";
// import SecondaryButton from "./SecondaryButton.jsx"

const List = styled.div`
  list-style: none;
`

export default function TodoList(props) {
  const { todos} = props;

  return (
    <>
      <List>
        {todos.map((todo) => (
          <div>
            <Todo key={todo.id} id={todo.id} todo={todo}  />
            <button onClick={() => props.onDeleteClick(props.todo.id)}>Удалить</button>
            <button onClick={() => props.onDoneClick(props.todo.id)}>Выполнено</button>
          </div>
        ))}
      </List>
    </>
  );
}
