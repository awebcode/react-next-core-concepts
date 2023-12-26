import Card from "@/app/components/Card";
import Form from "@/app/components/Form";
import Heading from "@/app/components/Heading";
import ImageComponent from "@/app/components/ImageComponent";
import NextUser from "@/app/components/NextUser";
import { baseUrl } from "@/util/base_url";
import Image from "next/image";
import Link from "next/link";
import { SortableComponent } from "./components/ReactSortable";
import { useState } from "react";

const fetchData = async () => {
  const res = await fetch(`${baseUrl}/api/user`);
  const data = await res.json();
  return data;
};

export default async function Home({ props }: any) {
  const x: any = await fetchData();

  

  return (
    <div className="container mx-auto">
      <SortableComponent/>
      <NextUser />
      <Heading title="hello world" />
      <Card data={x?.users}  />

      <ImageComponent />
      <Form />
    </div>
  );
}

//Client component

// "use client";
// import { useEffect, useState } from "react";
// export default function Home() {
//   const [x, setX] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");

//       const data = await res.json();
//       setX(data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="container mx-auto">
//       <h1 className="leading-tight text-6xl text-gray-800 text-center p-5 font-extrabold">
//         Md Asikur
//       </h1>

//       <div className="flex flex-wrap">
//         {" "}
//         {x.map((x: any) => (
//           <div className="p-12 rounded-sm m-3 shadow-md">
//             {" "}
//             <li className=" leading-tight">{x.name}</li>
//             <li>{x.email}</li>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
