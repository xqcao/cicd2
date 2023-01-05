import React, { useState, useEffect } from "react";
import axios from "axios";
const CommentDisplay = () => {
  const [commitList, setCommitList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  const num = 6;
  const [leftpoint, setLeftpoint] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      setCommitList(data);
    })();
  }, []);
  const clickBack = () => {
    setLeftpoint((p) => {
      if (p - num < 0) {
        return 0;
      } else {
        return p - num;
      }
    });
  };
  const clickNext = () => {
    setLeftpoint((p) => {
      if (p + num > commitList.length - 1) {
        return commitList.length - 1;
      } else {
        return p + num;
      }
    });
  };
  return (
    <div>
      <h2>Comments Display</h2>
      <div>
        <button onClick={clickBack}>Previous</button>
        <button onClick={clickNext}>Next</button>
      </div>
      <div>
        <hr />
        {commitList
          .filter((x, i) => i >= leftpoint && i < leftpoint + num)
          .map((it, idx) => (
            <div key={it.id + "-" + idx}>
              <p>Name: {it.name}</p>
              <p>Body: {it.body}</p>
              <p>
                Email: {it.email} <i>{it.id}</i>
              </p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentDisplay;
