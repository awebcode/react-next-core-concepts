"use client"
import React from 'react'
import NextTopLoader from "nextjs-toploader";

const Loader = () => {
  return (
    <div className='inset'>
      <NextTopLoader height={8} color="#209cee" />
    </div>
  );
}

export default Loader