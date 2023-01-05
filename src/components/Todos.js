import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as actions from "../mystore/todos/todos_actions";

const Todos = (props) => {
  const { todoList, addTodo, updateTodo, resetTodo, deleteTodo } = props;
  const defaultValue = { name: "", description: "", id: "" };
  const [oneTodo, setOneTodo] = useState(defaultValue);
  const [flag, setFlag] = useState(false);
  const clickToModify = (el) => {
    setFlag(true);
    setOneTodo(el);
  };
  return (
    <div>
      <h2>Todos</h2>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>
                <input
                  type="text"
                  value={oneTodo.name}
                  onChange={(e) =>
                    setOneTodo({ ...oneTodo, name: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Name: </td>
              <td>
                <input
                  type="text"
                  value={oneTodo.description}
                  onChange={(e) =>
                    setOneTodo((pre) => ({
                      ...pre,
                      description: e.target.value,
                    }))
                  }
                />
              </td>
            </tr>
            <tr>
              {!flag ? (
                <td>
                  <button
                    onClick={() => {
                      addTodo({ ...oneTodo, id: uuidv4() });
                      setOneTodo(defaultValue);
                    }}
                  >
                    Add
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={() => {
                      updateTodo(oneTodo);
                      setFlag(false);
                      setOneTodo(defaultValue);
                    }}
                  >
                    Update
                  </button>
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
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((it, idx) => (
              <tr key={it.name + "-" + idx}>
                <td>{idx + 1}</td>
                <td>{it.name}</td>
                <td>{it.description}</td>
                <td>
                  <button onClick={() => clickToModify(it)}>Modify</button>
                  <button onClick={() => deleteTodo(it.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todoState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (s) => dispatch(actions.addAction(s)),
    updateTodo: (s) => dispatch(actions.updateAction(s)),
    resetTodo: () => dispatch(actions.resetAction()),
    deleteTodo: (s) => dispatch(actions.deleteAction(s)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
