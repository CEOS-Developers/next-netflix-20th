"use client"

import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        <div className="relative w-[375px] h-[100vh]">
            {children}
            <Footer/>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  );
}
