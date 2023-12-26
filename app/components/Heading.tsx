import React from 'react'
interface title{
    title:string
}
const Heading = ({title}:title) => {
  return (
    <div>
      <h1 className="leading-tight capitalize  text-6xl text-gray-700 text-center p-5 font-extrabold">
        {title || "Md Asikur"}
      </h1>
    </div>
  );
}

export default Heading