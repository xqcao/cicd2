import { legacy_createStore as createStore } from "redux";
import reduces from "./reduces";

const store = createStore(reduces);

export default store;
