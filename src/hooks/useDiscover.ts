import {
  getNewRelease,
  getTopRated,
  getTrending,
} from "@/services/discover/discover.services";
import type { DiscoverData } from "@/types/discover.types";
import { useEffect, useMemo, useState } from "react";

export function useDiscover() {
  const [trendingData, setTrendingData] = useState<DiscoverData[]>([]);
  const [topRatedData, setTopRatedData] = useState<DiscoverData[]>([]);
  const [newReleaseData, setNewReleaseData] = useState<DiscoverData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const get_trending = await getTrending();
        setTrendingData(get_trending);

        const get_top_rated = await getTopRated();
        setTopRatedData(get_top_rated);

        const get_new_release = await getNewRelease();
        setNewReleaseData(get_new_release);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching data: ", error.message);
          setError(error);
        } else {
          console.error("Unkown error: ", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const combinedDiscoverData = useMemo(() => {
    return [
      { title: "Trending Series", items: trendingData?.slice(0, 4) || [] },
      { title: "Top Rated Series ", items: topRatedData?.slice(0, 4) || [] },
      { title: "New Releases", items: newReleaseData?.slice(0, 4) || [] },
    ];
  }, [trendingData, topRatedData, newReleaseData]);

  return {
    trendingData,
    topRatedData,
    newReleaseData,
    combinedDiscoverData,
    loading,
    error,
  };
}
