import { useDiscover } from "@/hooks/useDiscover";
import type { DiscoverProviderProps } from "@/types/discover.types";
import { DiscoverContext } from "./discover.context";

export function DiscoverProvider({ children }: DiscoverProviderProps) {
  const { trendingData } = useDiscover();

  return (
    <DiscoverContext.Provider value={{ trendingData }}>
      {children}
    </DiscoverContext.Provider>
  );
}

export default DiscoverProvider;
