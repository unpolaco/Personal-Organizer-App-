import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'


class TimeboxApp extends React.Component {

  render() {
    return (
      <TimeboxWrapper>
        <TimeboxEditor>
          <Input taskName type="text" defaultValue="Nazwa zadania"
          name="addTaskName"/>
          {/* <label for="addTaskName">Zadanie do zrobienia</label> */}
          <Input type="number" defaultValue="Ustaw czas" name="setTime"/>
          {/* <label for="setTime">Ustaw czas</label> */}
          <Button>Dodaj</Button>
        </TimeboxEditor>
        <TimeboxElement>
          <p>Dodaje Timeboxa</p>
          <Clock />
          <ButtonWrapper>
            <Button>Start</Button>
            <Button>Pauza</Button>
            <Button>Stop</Button>
          </ButtonWrapper>
          <p>Liczba przerw: 2</p>
        </TimeboxElement>
      </TimeboxWrapper>
    )
  }
}

const TimeboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 600px;
  margin-top: 15px;
  padding: 10px;
  background-color: #fff;
  /* border: 1px solid red; */
`
const TimeboxEditor = styled.div`
display: flex;
padding: 10px 0;
justify-content: center;
`
const TimeboxElement = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid grey;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
padding: 15px;
`
const Input = styled.input`
  border: none;
  width: ${props => props.taskName ? "250px" : "100px"};
  text-align: left;
  font-size: 17px;
  padding: 0 5px;
  border: 1px solid grey;
  &:hover {
    color: #3498db;
  }
`
const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid grey;
    width: 100px;
    padding: 2px 10px;
    margin: 2px 10px;
    height: 25px;
    background-color: #fff;
    font-size: 15px;
  & > * {
    stroke: #34495e;
  }
  &:hover {
    color: #3498db;
  }
  &:hover > * {
    stroke: #3498db;
  }
`


export default TimeboxApp;