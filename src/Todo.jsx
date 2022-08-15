import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import TextField from "./components/TextField.jsx"
import ButtonPrimary from "./components/ButtonPrimary.jsx"
import Task from "./components/Task.jsx"
import Title from "./components/Title.jsx"
import DoneTask from "./components/DoneTask.jsx"
import NavigateButton from "./components/NavigateButton.jsx"
import CountDownTimer from "./CountDownTimer.jsx";


const StyledWraperTexField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px 30px 0px;
`

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

const FormContainer = styled.div`
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

export default function Todo(props) {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [times, setTimes] = useState([])
  const [date, setDate] = useState()
  const [description, setDescription] = useState("");
  const [complities, setComplities] = useState([]);
  const [allTasks, setAllTasks] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(true);

  const [targetDate, setTargetDate] = useState(
    new Date()
  );

//   const handleChange = (event) => {
//     event.preventDefault();
//     setTargetDate(new Date(event.target.value));
// }

  // function handleChange(e){
  //   e.preventDefault();
  //   setTargetDate(new Date(e.target.value));
  //   console.log(targetDate)
  // }

  function handleClick(e){
    setTargetDate("");
  }

  function handleShowCompletedTasks(){
    setCompletedTasks(false);
    setAllTasks(true);
  }


  function handleShowAllTasks(){
    setAllTasks(false);
    setCompletedTasks(true);
  }



  // useEffect((inputDate) => {
  //     const intervalId = setInterval(() => {
  //
  //     setDate(inputDate);
  //     console.log(date);
  //     const msDate = new Date(inputDate).getTime();
  //     const now = new Date().getTime();
  //     const timeLeft = msDate - now;
  //
  //     const secondCalc = 1000;
  //     const minuteCalc = secondCalc * 60
  //     const hourCalc = minuteCalc * 60
  //     const dayCalc = hourCalc * 24
  //
  //
  //     const day = Math.floor((timeLeft) / dayCalc);
  //     const hour = Math.floor((timeLeft % dayCalc) / hourCalc);
  //     const minute = Math.floor((timeLeft % hourCalc) / minuteCalc);
  //     const second = Math.floor((timeLeft % minuteCalc) / secondCalc);
  //
  //     console.log(day)
  //     console.log(hour)
  //     console.log(minute)
  //     console.log(second)
  //
  //
  //     return [day, hour, minute, second]
  //
  //   }, 1000);
  //
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  //
  //
  // }, [inputDate])



  function handleFromSubmit(event) {
    event.preventDefault();

    const now = new Date().getTime();
    const msDate = new Date(date).getTime();
    const timeLeft = msDate - now;

    const secondCalc = 1000;
    const minuteCalc = secondCalc * 60
    const hourCalc = minuteCalc * 60
    const dayCalc = hourCalc * 24


    const day = Math.floor((timeLeft) / dayCalc);
    const hour = Math.floor((timeLeft % dayCalc) / hourCalc);
    const minute = Math.floor((timeLeft % hourCalc) / minuteCalc);
    const second = Math.floor((timeLeft % minuteCalc) / secondCalc);

    console.log(date);

    setTodos([...todos, {task:task, description:description, day:day, hour:hour, minute:minute, second:second, id:uuid()}]);
    setTask("")
    setDescription("")
    setDate("")

  }


  function handleTaskChange(e) {
    setTask(e.target.value)
  }


  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleDateChange(e) {
    setDate(e.target.value);

  }

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleDoneClick(id) {
    const doneTask = todos.filter((todo) => todo.id === id);
    setComplities((prev) => [...prev, ...doneTask]);
    const undoneTasks = todos.filter((todo) => todo.id !== id);
    setTodos(prev => undoneTasks);
  };

  function handleUnDoneClick(id) {
    const doneComplities = complities.filter((complitie) => complitie.id === id);
    setTodos((prev) => [...prev, ...doneComplities]);
    // console.log(doneComplities)
    const undoneComplities = complities.filter((complitie) => complitie.id !== id);
    setComplities(prev => undoneComplities)
  };


  function handleDeleteDoneClick(id) {
    setComplities(prev => todos.filter((todo) => todo.id !== id));
  }

  const renderAllTasks = (
    <div>{todos.map((todo) => (
      <div>
          <Task key={todo.id} id={todo.id} info={todo}
          onDeleteClick={() => handleDeleteClick(todo.id)}
          onDoneClick={() => handleDoneClick(todo.id)}/>
      </div>
    ))}
    </div> );

  const renderComplitedAllTasks = (
    <div>
      {complities.map((complitie) => (
           <div>
             <DoneTask border={!completedTasks && "1.5px solid #148F2B"}
             color={!completedTasks && "#FFFFFF"}
             backgroundColor={!completedTasks && "#148F2B"}
             key={complitie.id} id={complitie.id} info={complitie}
             onDeleteDoneClick={() => handleDeleteDoneClick(complitie.id)} onUnDoneClick={() => handleUnDoneClick(complitie.id)} />
           </div>
         ))}
    </div>
  );



  return (
    <>
      <MainSection className="main-section">
        <FormContainer>
          <Title>Cоздайте задачу </Title>
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
            <StyledWraperTexField>
              <label htmlFor="description">Когда дедлайн?</label>
              <TextField
                  type="datetime-local"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                />
            </StyledWraperTexField>
            <ButtonPrimary
                type="submit"
                value="Добавить задачу"
            />
          </form>
        </FormContainer>
        <TaskSection className="task-section">
        <NavigateButtonWraper>
          <NavigateButton backgroundColor={!allTasks && "#FFCA7A"} onClick={handleShowAllTasks}>Активные {todos.length}</NavigateButton>

          <NavigateButton backgroundColor={!completedTasks && "#FFCA7A"} onClick={handleShowCompletedTasks}>Завершенные {complities.length}</NavigateButton>
        </NavigateButtonWraper>

          {!allTasks && renderAllTasks}
          {!completedTasks && renderComplitedAllTasks}

        </TaskSection>
      </MainSection>
    </>
  );
}
