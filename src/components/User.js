import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const User = () => {
  const defaultUser = { name: "", email: "", id: "" };
  const [users, setUsers] = useState([]);
  // const nameRef = useRef();
  // const emailRef = useRef();
  // const [uname, setUname] = useState("");
  // const [uemail, setUemail] = useState("");
  const [user, setUser] = useState(defaultUser);
  const [isupdate, setIsupdate] = useState(false);
  const addUser = () => {
    const id = uuidv4().substring(0, 8);

    // console.log(nameRef.current.value, emailRef.current.value, id);
    setUsers((pre) => [
      ...pre,
      {
        // name: nameRef.current.value,
        // email: emailRef.current.value,
        ...user,
        id: id,
      },
    ]);

    // nameRef.current.value = null;
    // emailRef.current.value = null;
    // setUemail("");
    // setUname("");
    setUser({ name: "", email: "", id: "" });
  };
  const [flag, setFlag] = useState(false);
  const changeMode = (a) => {
    setFlag((f) => !f);
  };
  const doUpdate = () => {
    users.map((it) => {
      if (it.id === user.id) {
        it.name = user.name;
        it.email = user.email;
      }
      return it;
    });
    setUser(defaultUser);
    setIsupdate(false);
    // setUsers((pp) => {
    //   pp.map((it) => {
    //     if (it.id === user.id) {
    //       it.name = user.name;
    //       it.email = user.email;
    //     }
    //     return it;
    //   });
    // });
  };
  const deleteOne = (id) => {
    setUsers((p) => {
      console.log("deleteOne called", id);
      return p.filter((x) => x.id !== id);
    });
  };
  return (
    <div>
      <h2>User info Page</h2>
      <div
        style={{
          background: flag ? "#333" : "#FFF",
          color: !flag ? "#333" : "#FFF",
        }}
      >
        Change Mod: <input type="checkbox" value={flag} onChange={changeMode} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  name="uname"
                  id="uname"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  name="uemail"
                  id="uemail"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              {!isupdate ? (
                <td>
                  <button onClick={addUser}>Add</button>
                </td>
              ) : (
                <td>
                  <button onClick={doUpdate}>Update</button>
                </td>
              )}
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((uu, idx) => (
              <tr key={uu.id + "-" + idx}>
                <td>{idx + 1}</td>
                <td>{uu.name}</td>
                <td>{uu.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setUser(uu);
                      setIsupdate(true);
                    }}
                  >
                    Update
                  </button>
                  <button onClick={() => deleteOne(uu.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
