import { getMangaById } from "@/services/discover/discover.services";
import type { MangaLoaderTypes } from "@/types/discover.types";
import type { LoaderFunctionArgs } from "react-router-dom";

export function mangaDetailsLoader({ params }: LoaderFunctionArgs) {
  const { id, type } = params as Partial<MangaLoaderTypes>;

  if (!id || !type) {
    console.error("Error need and id");
  }

  return getMangaById({ id, type });
}
