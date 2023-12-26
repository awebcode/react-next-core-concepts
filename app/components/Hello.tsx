import React, { memo } from 'react'

const Hello = ({ hello }:any) => {
    console.log("hello Called")
  return (
    <div onClick={hello}>Hello</div>
  )
}

export default memo(Hello);