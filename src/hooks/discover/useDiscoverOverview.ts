import type { CombinedDiscoverData } from "@/types/discover.types";
import { useNewRelease } from "./useNewRelease";
import { useTopRated } from "./useTopRated";
import { useTrending } from "./useTrending";

export function useDiscoverOverview() {
  const trending = useTrending();
  const topRated = useTopRated();
  const newRelease = useNewRelease();

  const combinedDiscoverData: CombinedDiscoverData[] = [
    {
      title: "Trending Series",
      type: "trending",
      items: trending.data?.slice(0, 4) ?? [],
    },
    {
      title: "Top Rated Series",
      type: "toprated",
      items: topRated.data?.slice(0, 4) ?? [],
    },
    {
      title: "New Releases",
      type: "newrelease",
      items: newRelease.data?.slice(0, 4) ?? [],
    },
  ];

  return {
    trending: trending.data,
    topRated: topRated.data,
    newRelease: newRelease.data,
    combinedDiscoverData,
  };
}
