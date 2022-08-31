import { useState, useEffect } from "react";
import styled from "styled-components";
import SecondaryButton from "./components/SecondaryButton.jsx"

const TitleTask = styled.h2`
  font-size: 25px;
  line-height: 120%;
  font-weight: 500;
`

const DateWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`


const Description = styled.p`
  line-height: 120%;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #00000066;
  margin: 15px 0px;
`

const DateText = styled.p`
  line-height: 120%;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  margin: 3px;
`

const TaskWraper = styled.div`
  font-size: 25px;
  line-height: 120%;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px 0px;
`

const TaskWraperInner = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid #DADADA;
  padding-bottom: 15px;

`

const ButtonWraper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
`


export default function Complite(props){

  const { name, desc, totalSecs } = props.complitie;
  const [time, setTime] = useState(totalSecs);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time <= 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1000;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  // const timeDisplay = (
  //   <p>
  //     Осталось времени:
  //     {days}дн:
  //     {hours}
  //     ч:
  //     {minutes}
  //     мин:
  //     {seconds} сек
  //   </p>
  // );
  // const expired = <p>expired</p>;

  // if (days + hours + minutes + seconds === 0) {
  //   return (
  //     <TodoDiv>
  //       <h2>{name}</h2>
  //       <p>{desc}</p>
  //       {expired}
  //     </TodoDiv>
  //   );
  // }
  // return (
  //   <>
  //   <TodoDiv>
  //     <h2>{name}</h2>
  //     <p>{desc}</p>
  //     {timeDisplay}
  //   </TodoDiv>
  //   </>
  // );

  return(
    <>
      <TaskWraperInner>
        <TaskWraper>
          <div>
            <TitleTask>{name}</TitleTask>
            <Description>{desc}</Description>
          </div>
          <ButtonWraper className="button-wraper">
            <SecondaryButton
              border={!props.completedTasks && "1.5px solid #148F2B"}
              color={!props.completedTasks && "#FFFFFF"}
              backgroundColor={!props.completedTasks && "#148F2B"}
              onClick={() => props.onUnDoneClick(props.complitie.id)}>
              <ion-icon name="checkmark-sharp"></ion-icon>
            </SecondaryButton>

            <SecondaryButton
              onClick={() => props.onDeleteDoneClick(props.complitie.id)}>
              <ion-icon name="trash-outline">
              </ion-icon>
            </SecondaryButton>
          </ButtonWraper>

        </TaskWraper>
        <DateWraper>
          <DateText>Дедлайн через: </DateText>
          <DateText>
          {days} дней
          {hours} часов
          {minutes} мин
          {seconds} сек
          </DateText>
        </DateWraper>
      </TaskWraperInner>
    </>
  );
};
