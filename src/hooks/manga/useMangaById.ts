import { getMangaById } from "@/services/discover/discover.services";
import { useQuery } from "@tanstack/react-query";

export function useMangaById(id: string | undefined) {
  return useQuery({
    queryKey: ["mangaById"],
    queryFn: () => getMangaById(id),
    staleTime: 1000,
  });
}
