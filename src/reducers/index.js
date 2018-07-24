import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import { reducer as form } from "redux-form";


const rootReducer = combineReducers({
  movies: moviesReducer,
  form
});

export default rootReducer;