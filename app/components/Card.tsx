"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs';

const Card = ({ data:x }: any) => {
  
  const [data, setData] = useState<any>(x);
  return (
    <div>
      {" "}
      <div className="flex flex-wrap">
        {" "}
        <ReactSortable
          list={data}
          setList={setData}
          swap
          multiDrag
          animation="200"
          easing="ease-out"
        >
          {data.map((x: any) => (
            <div
              className="p-12 rounded-sm m-3 shadow-md hover:scale-110  duration-300 transition-all"
              key={x?._id}
            >
              {" "}
              <li className=" leading-tight ">
                <Link className=" text-blue-500 " href={`/user/${x?._id}`}>
                  {x.name}
                </Link>
              </li>
              <li>{x.email}</li>
              {x.message && <li>{x.message}</li>}
            </div>
          ))}
        </ReactSortable>
      </div>
    </div>
  );
}

export default Card