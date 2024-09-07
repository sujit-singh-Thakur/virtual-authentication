//to combine the reducer
import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
<<<<<<< HEAD
<<<<<<< HEAD
import projectReducers from "./projectReducers";
// import { Projects } from "../../container";

const myReducer = combineReducers({
  user: userAuthReducer,
  Projects : projectReducers,
=======

const myReducer = combineReducers({
  user: userAuthReducer,
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======

const myReducer = combineReducers({
  user: userAuthReducer,
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
});

export default myReducer;
