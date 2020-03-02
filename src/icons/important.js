import React from 'react'

const Important = ({
  fill = "#34495e",
  stroke = "#34495e",
  width = "15px",
}) => (
<svg
  width={width}
  height={width}
  xmlns='http://www.w3.org/2000/svg' 
  viewBox='0 0 512 512'
  >
  <path 
  d='M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z' 
  fill={fill}
  stroke= {stroke}
  strokeLinecap= 'round'
  strokeLinejoin= 'round'
  strokeWidth= '32px'
  />
  <circle 
  cx='256' 
  cy='416' 
  r='16'
  fill={fill} 
  stroke= {stroke}
  strokeLinecap= 'round'
  strokeLinejoin= 'round' 
  strokeWidth='32px'
  />
  </svg>
)
export default Important;