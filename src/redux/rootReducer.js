import { combineReducers, createStore } from "redux";
import NavbarReducer from "./store/NavbarReducer";

const reducer = combineReducers({
    navbar: NavbarReducer
  });
  
  const store = createStore(reducer);
  
  export default store;