import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import DiscoverProvider from "./discover/discover.provider";

const query_client = new QueryClient();

export default function IndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={query_client}>
      <DiscoverProvider>{children}</DiscoverProvider>
    </QueryClientProvider>
  );
}
