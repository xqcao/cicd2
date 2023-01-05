import React, { useState, useEffect } from "react";
import axios from "axios";
const UserDisplay = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [userList, setUserList] = useState([]);
  const [gap, setGap] = useState(3);
  const [leftPoint, setLeftPoint] = useState(0);

  //   IIFE
  // (async () => {
  //     // code goes here
  // })();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      console.log(data);
      setUserList(data);
    })();
  }, []);
  const clickPrevious = () => {
    setLeftPoint((p) => {
      if (p - gap < 0) {
        return 0;
      } else {
        return p - gap;
      }
    });
  };
  const clickNext = () => {
    setLeftPoint((p) => {
      if (p + gap > userList.length - 1) {
        return userList.length - 1;
      } else {
        return p + gap;
      }
    });
  };
  return (
    <div>
      <h2>UserDisplay</h2>
      <div>
        <button onClick={clickPrevious}>Previous</button>
        <button onClick={clickNext} style={{ marginLeft: "5px" }}>
          Next
        </button>
      </div>
      <div>
        {userList.length > 0 ? (
          userList
            .filter((x, i) => i >= leftPoint && i < leftPoint + gap)
            .map((it, idx) => (
              <div key={it.id + "-" + idx}>
                <p>
                  <i style={{ color: "green" }}>Name: </i>
                  {it.name} {it.username}
                </p>
                <p>
                  <i style={{ color: "green" }}>Address: </i>
                  {it.address.suite} {it.address.street}, {it.address.city},{" "}
                  {it.address.zipcode}
                </p>
                <p>
                  <i style={{ color: "green" }}>Email: </i>
                  {it.email} {it.id}
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

export default UserDisplay;
