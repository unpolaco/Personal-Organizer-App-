import React from 'react'

const Checkmark = ({
  fill ="none",
  stroke ="#34495e",
  width ="15px",
}) => (
<svg
  width={width}
  height={width}
  xmlns='http://www.w3.org/2000/svg'  
  viewBox='0 0 512 512'>
<polyline 
  points='416 128 192 384 96 288'
  fill={fill} 
  stroke={stroke}
  strokeLinecap='round'
  strokeLinejoin='round'
  strokeWidth='32px'
  />
</svg>
)
export default Checkmark;