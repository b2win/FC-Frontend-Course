import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
  // composeWithDevTools() 이렇게 쓰면 안되고 위에처럼!!!
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
