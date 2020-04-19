import React from 'react'
import styled from 'styled-components'
import { Text } from '../other/Text';

export default function Clock(props) {
  const { hoursLeft, minutesLeft, secondsLeft, progressInPercent } = props;
  const hh = hoursLeft<10 ? "0"+ hoursLeft : hoursLeft;
  const mm = minutesLeft<10 ? "0"+ minutesLeft : minutesLeft;
  const ss = secondsLeft<10 ? "0"+ secondsLeft : secondsLeft;


  return (
    <ClockWrapper>
      <Text>Pozostało {hh}:{mm}:{ss}</Text>
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
  width: 600px;
`
const ProgressBar = styled.div`
  border: 1px solid ${({ theme }) => theme.lime600};
  height: 25px;
  width: 80%;
  padding: 5px;
`
const ProgressIndicator = styled.div`
  height: 13px;
  width: 0;
  background-color: ${({ theme }) => theme.lime600};
`




