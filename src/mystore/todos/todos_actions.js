import * as types from "./todos_types";

export const addAction = (x) => {
  return {
    type: types.TODO_ADD,
    payload: x,
  };
};

export const updateAction = (x) => {
  return {
    type: types.TODO_UPDATE,
    payload: x,
  };
};

export const deleteAction = (x) => {
  return {
    type: types.TODO_DELETE,
    payload: x,
  };
};

export const resetAction = (x) => {
  return {
    type: types.TODO_RESET,
  };
};
