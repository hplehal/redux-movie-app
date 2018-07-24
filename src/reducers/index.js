import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import { reducer as formReducer } from "redux-form";


const rootReducer = combineReducers({
  movies: moviesReducer,
  form: formReducer
});

export default rootReducer;