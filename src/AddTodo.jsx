import React, { useState, useEffec} from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import TextField from "./components/TextField.jsx"
import ButtonPrimary from "./components/ButtonPrimary.jsx"
import SecondaryButton from "./components/SecondaryButton.jsx"
import Title from "./components/Title.jsx";


const StyledWraperTexField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px 30px 0px;
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
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 50px 20px;
  border-radius: 0px 60px 0px 0px;
  border: 2px solid #E8E8E8
`

export default function AddTodo(props) {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState();


  function handleFromSubmit(event) {
    event.preventDefault();

    const result = props.onSubmit(name,desc, date)

    if(result){
      setName("")
      setDesc("")
      setDate("")
      console.log("works")
    }

  }

const handleName = (e) => {
   setName(e.target.value);
 };

 const handleDesc = (e) => {
   setDesc(e.target.value);
 };

 const handleDate = (e) => {
   setDate(e.target.value);
 };


  return (
    <>
      <FormContainer>
        <Title margin="20px 0px 50px">Cоздайте задачу </Title>
        <form onSubmit={handleFromSubmit}>
          <StyledWraperTexField>
            <label htmlFor="task">Какая задача</label>
            <TextField
                type="text"
                name="task"
                value={name}
                placeholder="Заверстать форму"
                onChange={handleName}
              />
          </StyledWraperTexField>
          <StyledWraperTexField>
            <label htmlFor="description">Описание задачи</label>
            <TextField
                type="text"
                name="description"
                value={desc}
                placeholder="Незабыть отправить"
                onChange={handleDesc}
              />
          </StyledWraperTexField>
          <StyledWraperTexField>
            <label htmlFor="description">Когда дедлайн?</label>
            <TextField
                type="datetime-local"
                name="date"
                value={date}
                onChange={handleDate}
              />
          </StyledWraperTexField>
          <ButtonPrimary
              type="submit"
              value="Добавить задачу"
          />
        </form>
      </FormContainer>
    </>
  );


}
