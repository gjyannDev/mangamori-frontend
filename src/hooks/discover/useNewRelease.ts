import { getNewRelease } from "@/services/discover/discover.services";
import { useQuery } from "@tanstack/react-query";

export function useNewRelease() {
  return useQuery({
    queryKey: ["newReleaseData"],
    queryFn: getNewRelease,
    staleTime: 1000,
  });
}
