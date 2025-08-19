import { useMangaById } from "./useMangaById";

export function useMangaOverview(id?: string) {
  const mangaById = useMangaById(id);

  return {
    mangaById: mangaById.data,
  };
}
