import React, { useState } from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton.jsx"

const TitleTask = styled.h2`
  font-size: 25px;
  line-height: 120%;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 25px;
  line-height: 120%;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`
const DateWraper = styled.div`
  display: flex;
  justify-content: flex-end;
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
const Date = styled.p`
  line-height: 120%;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
`

export default function DoneTask(props) {

  const {info} = props;

  return(
    <>
      <TaskWraperInner>
        <TaskWraper>
          <div>
            <TitleTask>{info.task}</TitleTask>
            <Description>{info.description}</Description>
            <Date>{info.date}</Date>
          </div>
          <ButtonWraper className="button-wraper">
            <SecondaryButton
              backgroundColor={props.backgroundColor}
              color={props.color}
              border={props.border}
              onClick={props.onUnDoneClick}>
              <ion-icon name="checkmark-sharp"></ion-icon>
              </SecondaryButton>
            <SecondaryButton
                onClick={props.onDeleteDoneClick}>
                <ion-icon name="trash-outline">
                </ion-icon>
            </SecondaryButton>
          </ButtonWraper>
        </TaskWraper>
        <DateWraper>
          <DateText>Дедлайн через: </DateText>
          <DateText>{info.day} дней</DateText>
          <DateText>{info.hour} часов</DateText>
          <DateText>{info.minute} минут</DateText>
          <DateText>{info.second} секунд</DateText>
        </DateWraper>
      </TaskWraperInner>
    </>
  );

}
