import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import TaskStore from "./models/TaskStore";
import { Provider } from "mobx-react";

import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";
const store = TaskStore.create({});
onPatch(store, (patch) => {
  console.log(patch);
});
makeInspectable(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
