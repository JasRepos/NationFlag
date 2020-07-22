import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import { loadCountries } from "./features/country/countryActions";

const store = configureStore();
store.dispatch(loadCountries())

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/App", () => {
    setTimeout(render);
  });
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
