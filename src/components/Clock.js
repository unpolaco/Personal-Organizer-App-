import React from 'react'
import styled from 'styled-components'

export default function Clock() {
  return (
    <ClockWrapper>
      <p>Pozostało 13:00</p>
      <ProgressBar>
        <ProgressIndicator></ProgressIndicator>
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




