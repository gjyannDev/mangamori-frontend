import { getTrending } from "@/services/discover/discover.services";
import { useQuery } from "@tanstack/react-query";

export function useTrending() {
  return useQuery({
    queryKey: ["trendingData"],
    queryFn: getTrending,
    staleTime: 1000,
  });
}
