import type React from "react";
import DiscoverProvider from "./discover/discover.provider";

export default function IndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DiscoverProvider>
      {children}
    </DiscoverProvider>
  )
}
