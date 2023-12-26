
import { memo } from "react";

const Todos = ({ todos, addTodo }:any) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      <div className="flex mx-4">
        {todos.map((todo, index) => {
          return <p key={index}>{todo + index}</p>;
        })}
      </div>

      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
