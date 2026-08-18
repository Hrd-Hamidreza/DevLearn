//! ------------------------------------ Import
import { QueryClient } from "@tanstack/react-query";
//! ------------------------------------ Query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      gcTime: 10 * 1000,
      retry: 3,
    },
  },
});
