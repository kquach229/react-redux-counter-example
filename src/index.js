import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import the createstore from the redux package
import { createStore } from "redux";

// import the provider from the react redux package
import { Provider } from "react-redux";

// import the reducer that we create in the reducer.js file
import { reducer } from "./reducer";

// use the createStore method that we imported from the redux library to pass in the reducer.
// then store it in a var or const. This is important as you will need to pass the store
// to the provider below
const store = createStore(reducer);

// Use the provider to pass in the store that we created. The provider takes one attribute,
// the attribute is always store.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
