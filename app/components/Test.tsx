import React, { memo } from 'react'

const Test = ({func}:any) => {
    console.log("Test Rendering!")
  return (
    <div>Test</div>
  )
}

export default memo(Test);