import { createStore } from "redux";
import counter from "./ducks/counter";

const store = createStore(counter);

export default store;
