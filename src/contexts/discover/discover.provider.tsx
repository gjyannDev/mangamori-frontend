import { useDiscoverOverview } from "@/hooks/discover/useDiscoverOverview";
import type { DiscoverProviderProps } from "@/types/discover.types";
import { DiscoverContext } from "./discover.context";

export function DiscoverProvider({ children }: DiscoverProviderProps) {
  const { trending, topRated, newRelease, combinedDiscoverData } =
    useDiscoverOverview();

  return (
    <DiscoverContext.Provider
      value={{
        trending,
        topRated,
        newRelease,
        combinedDiscoverData,
      }}
    >
      {children}
    </DiscoverContext.Provider>
  );
}

export default DiscoverProvider;
