import React from 'react'
import styled from 'styled-components'

export default function Clock(props) {
  const { hoursLeft, minutesLeft, secondsLeft, progressInPercent } = props;
  const hh = hoursLeft<10 ? "0"+ hoursLeft : hoursLeft;
  const mm = minutesLeft<10 ? "0"+ minutesLeft : minutesLeft;
  const ss = secondsLeft<10 ? "0"+ secondsLeft : secondsLeft;


  return (
    <ClockWrapper>
      <p>Pozostało {hh}:{mm}:{ss}</p>
      <ProgressBar>
        <ProgressIndicator style={{width: `${progressInPercent}%`}}></ProgressIndicator>
      </ProgressBar>
    </ClockWrapper>
  )
}
const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const ProgressBar = styled.div`
  border: 1px solid #3498db;
  height: 25px;
  width: 80%;
  padding: 5px;
`
const ProgressIndicator = styled.div`
  height: 25px;
  width: 40%;
  background-color: #3498db;
`




