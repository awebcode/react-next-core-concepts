

import React from 'react'
export async function generateMetadata({ params: { id } }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    title: data.name + "" + data.email + "Asikur Rahman",
    description: data.id + data.name + "" + data.email,
    icons: {
      icon:data.url 
    }
  };
}
const page = async ({ params: { id } }: any) => {
  
    
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
 const data = await res.json();
    console.log(data)
  return (
    <div className="p-12 rounded-sm m-3 shadow-md">
      {" "}
      <li>{data.id}</li>
      <li>{data.username}</li>
      <li className=" leading-tight">{data.name}</li>
      <li>{data.email}</li>
    </div>
  );
}

export default page



