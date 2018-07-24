// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import "./index.css";

// import App from "./components/App";

// const store = createStore(rootReducer, applyMiddleware(thunk));
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import "./index.css";
import App from "./components/App.js";
// import moviesReducer from "./reducers/moviesReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
global.store = store;

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById("root"));