'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';


export default function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            cacheTime: 0,
            staleTime: 0,
          },
        },
      }),
  );

  return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
  );
}
