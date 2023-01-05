import * as types from "./count_types";

export const increaseAction = (x) => {
  return {
    type: types.INCREASE_COUNT,
    payload: x,
  };
};

export const decreaseAction = (x) => {
  return {
    type: types.DECREASE_COUNT,
    payload: x,
  };
};

export const resetAction = () => {
  return {
    type: types.RESET_COUNT,
  };
};
