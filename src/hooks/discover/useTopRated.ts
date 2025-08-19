import { getTopRated } from "@/services/discover/discover.services";
import { useQuery } from "@tanstack/react-query";

export function useTopRated() {
  return useQuery({
    queryKey: ["topRatedData"],
    queryFn: getTopRated,
    staleTime: 1000,
  });
}
