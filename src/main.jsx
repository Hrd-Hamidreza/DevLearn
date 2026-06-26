//! ------------------------------------ Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/main.scss";
import App from "./App";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
//! ------------------------------------ Create
createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>,
);
//! ------------------------------------ Export
