//! ------------------------------------ Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import "/src/styles/main.scss";
import App from "/src/App";
import { Provider } from "react-redux";
import store from "/src/app/store";
//! ------------------------------------ Create
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
//! ------------------------------------ Export
