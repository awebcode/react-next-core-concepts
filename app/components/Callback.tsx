"use client";
import { useCallback, useEffect, useState } from "react";
import Todos from "./Todos";
import Hello from "./Hello";
import Test from "./Test";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any | []>([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev: []) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };

  // subscribe to thapa technical

  const hello = useCallback(() => {
    console.log("hello!");
    return <h1>Hello world</h1>;
  }, []);
  const testFunc = useCallback(() => {}, []);
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <Hello hello={hello} />
      <Test func={testFunc}></Test>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Callbackhook;
