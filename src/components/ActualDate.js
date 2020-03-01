import React from 'react'
import 'moment/locale/pl';
import styled from 'styled-components'

function ActualDate(props) {
 const { now } = props
  return (
    <div>
      <DisplayDate day >{now.format("dddd ,").toString().toUpperCase()}</DisplayDate> 
      <DisplayDate>{now.format("D MMMM YYYY")}</DisplayDate> 
    </div>
  )  
}
const DisplayDate = styled.div`
font-size: ${props => props.day ? "25px" : "18px" };
margin: 10px;
`
export default ActualDate;