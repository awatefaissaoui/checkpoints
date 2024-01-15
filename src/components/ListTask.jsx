import React, { useEffect, useState } from "react";

import Task from "./Task";
import Filter from "./Filter";

import { useSelector } from "react-redux";
function ListTask() {
  const todos = useSelector((state) => state.todos);
  const [filtred, setFiltred] = useState([]);

  return (
    <div>
      {filtred.length > 0 &&
        filtred.map((e, i) => {
          return (
            <div key={i}>
              <Task todo={e} id={i} setFiltred={setFiltred} />
            </div>
          );
        })}
      {filtred.length == 0 &&
        todos.map((e, i) => {
          return (
            <div key={i}>
              <Task todo={e} id={i} setFiltred={setFiltred} />
            </div>
          );
        })}

      <Filter todos={todos} setFiltred={setFiltred} />
    </div>
  );
}

export default ListTask;
