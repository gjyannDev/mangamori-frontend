import { DiscoverContext } from "@/contexts/discover/discover.context";
import { useContext } from "react";

export default function DiscoverPage() {
  const context = useContext(DiscoverContext);

  if (!context) {
    throw new Error("TrendingList must be used within a DiscoverProvider");
  }

  const { trendingData } = context;

  return (
    <div>
      <h2>Trending Items</h2>
      <pre>{JSON.stringify(trendingData, null, 2)}</pre>
    </div>
  );
}
