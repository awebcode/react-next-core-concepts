"use client";
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [div, setdiv] = useState(100);
  const memoFunc = useMemo(() => {
    console.log("*******")
    return add * 2;
  }, [add]);
  return (
    <div>
      <h1>{memoFunc}</h1>
      <br />

      <h1>{add}</h1>
      <button onClick={() => setAdd((pre) => pre + 1)} className="btn">
        add
      </button>
      <br />
      <h1>{div}</h1>
      <button className="btn" onClick={() => setdiv((pre) => pre - 1)}>
        sub
      </button>
    </div>
  );
};

export default UseMemo;
