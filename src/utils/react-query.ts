import { QueryClient, QueryCache } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: 1 * (1000 * 60 * 60),
    },
  },
  queryCache: new QueryCache({
    onError: error => {
      // Show Notification
    },
  }),
});
