import React, { useState, useEffect } from "react";
import axios from "axios";
const TodoDisplay = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todoList, settodoList] = useState([]);
  const gap = 60;
  const [frontPoint, setFrontPoint] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      console.log(data);
      settodoList(data);
    })();
  }, []);
  const clickNext = () => {
    setFrontPoint((pre) => {
      if (pre + gap > todoList.length - 1) {
        return todoList.length - 1;
      } else {
        return pre + gap;
      }
    });
  };
  const clickPrevious = () => {
    setFrontPoint((pre) => {
      if (pre - gap <= 0) {
        return 0;
      } else {
        return pre - gap;
      }
    });
  };
  return (
    <div>
      <h2>todoDisplay</h2>
      <div>
        <button onClick={clickPrevious}>Previous {frontPoint}</button>
        <button onClick={clickNext} style={{ marginLeft: "5px" }}>
          Next
        </button>
      </div>
      <div>
        {todoList.length > 0 ? (
          todoList
            .filter((aa, i) => i > frontPoint && frontPoint + gap)
            .map((it, idx) => (
              <div key={it.id + "-" + idx}>
                <p>
                  <i style={{ color: "green" }}>Title: </i>
                  {it.name} {it.title}
                </p>
                <p>
                  <i style={{ color: "green" }}>completed: </i>
                  {"" + it.completed}
                </p>
                <p>
                  <i style={{ color: "green" }}>ID: </i>
                  {it.id}
                </p>
                <hr />
              </div>
            ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default TodoDisplay;
