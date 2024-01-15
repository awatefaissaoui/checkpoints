import React from "react";

import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      {todos.map((e, i) => {
        return (
          <div key={i}>
            <Task todo={e} />
          </div>
        );
      })}
    </div>
  );
}

export default ListTask;
