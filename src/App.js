import { useState,useEffect } from "react";
import styled from "styled-components";
import GlobalFonts from './fonts/fonts';

import NavigateButton from "./components/NavigateButton.jsx"
import AddTodo  from "./AddTodo";
import Todo  from "./Todo";
import Complite  from "./Complite";
import uuid from "react-uuid";



const NavigateButtonWraper = styled.div`
  margin: 0px 40px;

`


const MainSection = styled.section`
  line-height: 1.15;
  display: flex;
  flex-direction: row;
`

const TaskSection = styled.section`
  width: 70%;
  padding: 40px 0px;
`


export default function App() {


  const [todos, setTodos] = useState(() =>{
    const savedItems = localStorage.getItem("todos");
    if(savedItems){
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  const [complities, setComplities] = useState([]);
  const [allTasks, setAllTasks] = useState(true);
  const [activeTasks, setActiveTasks] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(false);



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleShowAllTasks() {
    setAllTasks(true);
    setActiveTasks(false)
    setCompletedTasks(false);
  }

  function handleActiveTasks() {
    setAllTasks(false);
    setActiveTasks(true)
    setCompletedTasks(false);
  }

  function handleShowCompletedTasks() {
    setAllTasks(false);
    setActiveTasks(false)
    setCompletedTasks(true);
  }


  const totalSecs = (date) => {
    return new Date(date).getTime() - new Date().getTime();
  };

  const handleSubmit = (name, desc, date) => {
    const ts = totalSecs(date);
    if (name.length > 0) {
      setTodos((prev) => [...prev, { id: uuid(), name, desc, totalSecs: ts }]);
      return true;
    } else return false;
  };

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleDoneClick(id) {
    const doneTask = todos.filter((todo) => todo.id === id);
    setComplities((prev) => [...prev, ...doneTask]);
    const undoneTasks = todos.filter((todo) => todo.id !== id);
    setTodos((prev) => undoneTasks);
  }

  function handleDeleteDoneClick(id) {
    setComplities((prev) => todos.filter((todo) => todo.id !== id));
  }

  function handleUnDoneClick(id) {
    const doneComplities = complities.filter(
      (complitie) => complitie.id === id
    );
    setTodos((prev) => [...prev, ...doneComplities]);

    const undoneComplities = complities.filter(
      (complitie) => complitie.id !== id
    );
    setComplities((prev) => undoneComplities);
  }

  // const renderAllTasks = (
  //   <div>
  //     {todos.map((todo) => (
  //       <div>
  //         <Todo
  //           key={todo.id}
  //           todo={todo}
  //           onDeleteClick={handleDeleteClick}
  //           onDoneClick={handleDoneClick}
  //         />
  //       </div>
  //     ))}
  //   </div>
  // );

  const renderActiveTasks = (
    <div>
      {todos.map((todo) => (
        <div>
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteClick={handleDeleteClick}
            onDoneClick={handleDoneClick}
          />
        </div>
      ))}
    </div>
  );

  const renderComplitedAllTasks = (
    <div>
      {complities.map((complitie) => (
        <div>
          <Complite
            key={complitie.id}
            complitie={complitie}
            onDeleteDoneClick={handleDeleteDoneClick}
            onUnDoneClick={handleUnDoneClick}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <MainSection className="App">

        <AddTodo onSubmit={handleSubmit} />
        <TaskSection>

        <NavigateButtonWraper>
          <NavigateButton
          backgroundColor={allTasks && "#0170F2"}
          color={allTasks && "#FFFFFF"}
          onClick={handleShowAllTasks}>
          Все задачи {todos.length + complities.length}
          </NavigateButton>

          <NavigateButton
          backgroundColor={activeTasks && "#0170F2"}
          color={activeTasks && "#FFFFFF"}
          onClick={handleActiveTasks}>
          Активные {todos.length}
          </NavigateButton>

          <NavigateButton
          backgroundColor={completedTasks && "#0170F2"}
          color={completedTasks && "#FFFFFF"} onClick={handleShowCompletedTasks}>Завершенные {complities.length}</NavigateButton>

        </NavigateButtonWraper>

          {allTasks && renderActiveTasks} {allTasks && renderComplitedAllTasks}
          {activeTasks && renderActiveTasks}
          {completedTasks && renderComplitedAllTasks}
        </TaskSection>

      </MainSection>
    </>
  );
}
