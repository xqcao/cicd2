import { combineReducers } from "redux";

import todoReduce from "./todos/todos_reduce";
import countReduce from "./count/count_reduce";
export default combineReducers({ todoState: todoReduce, countReduce });
