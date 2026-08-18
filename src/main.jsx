//! ------------------------------------ Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import "/src/styles/main.scss";
import App from "/src/App";
import { Provider } from "react-redux";
import store from "/src/app/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "/src/app/queryClient";
//! ------------------------------------ Create
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
