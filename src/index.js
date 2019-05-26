import React from "react";
import { render } from "react-dom";
import storeFactory from "./Store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const store = storeFactory();

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
