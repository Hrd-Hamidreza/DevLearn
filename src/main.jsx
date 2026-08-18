//! ------------------------------------ Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import "/src/styles/main.scss";
import App from "/src/App";
import { Provider } from "react-redux";
import store from "/src/app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//! ------------------------------------ Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      gcTime: 10 * 1000,
      retry: 3,
    },
  },
});
//! ------------------------------------ Create
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
);
//! ------------------------------------ Export
