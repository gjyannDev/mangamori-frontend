import { getTrending } from "@/services/discover/discover.services";
import { useEffect, useState } from "react";

export function useDiscover() {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const get_trending = await getTrending();
        setTrendingData(get_trending);
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

  return {
    trendingData,
    loading,
    error,
  };
}
