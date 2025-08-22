import type { DiscoverData } from "@/types/discover.types";
import { useLoaderData } from "react-router-dom";

export default function MangaDetailsPage() {
  const manga = useLoaderData() as DiscoverData;

  return (
    <>
      <h1>{manga.title}</h1>
    </>
  );
}
