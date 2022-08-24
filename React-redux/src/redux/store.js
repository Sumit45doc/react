import { createStore } from "redux";
import buyReducer from "./cake/CakeReducer";

export const store = createStore(buyReducer);
