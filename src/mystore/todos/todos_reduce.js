import * as types from "./todos_types";

const defaultState = [
  { name: "run car", description: "out side car", id: "0001" },
  { name: "walk", description: "go to walk", id: "0002" },
];

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [...state, action.payload];
    case types.TODO_DELETE:
      return [...state].filter((s) => s.id !== action.payload);
    case types.TODO_UPDATE:
      return [...state].map((s) => {
        if (s.id === action.payload.id) {
          s.name = action.payload.name;
          s.description = action.payload.description;
        }
        return s;
      });
    case types.TODO_RESET:
      return defaultState;
    default:
      return state;
  }
};

export default reduce;
