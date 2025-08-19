import MangaCard from "@/components/cards/MangaCard";
import { DiscoverContext } from "@/contexts/discover/discover.context";
import type { DiscoverData, DiscoverType } from "@/types/discover.types";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function DiscoverListPage() {
  const { type } = useParams<{ type: DiscoverType }>();
  const context = useContext(DiscoverContext);

  if (!context) {
    throw new Error("DiscoverListPage must be used within DiscoverProvider");
  }

  const { trending, topRated, newRelease } = context;

  const datasetMap: Record<
    DiscoverType,
    { header: string; description: string; items: DiscoverData[] }
  > = {
    trending: {
      header: "Trending Manga & Manhwa",
      description: "The hottest series that fans are reading right now.",
      items: trending,
    },
    toprated: {
      header: "Top Rated Manga & Manhwa",
      description:
        "Critically acclaimed manga and manhwa with the best ratings.",
      items: topRated,
    },
    newrelease: {
      header: "New Release Manga & Manhwa",
      description: "Freshly released series you don't want to miss.",
      items: newRelease,
    },
  };

  const manga_data = type ? datasetMap[type] : undefined;

  if (!type || !manga_data) {
    return <p>Not Found</p>;
  }

  return (
    <div className="flex flex-col gap-[32px] py-[40px]">
      <div className="flex flex-col gap">
        <h2 className="font-playfair font-bold text-4xl">
          {manga_data?.header}
        </h2>
        <p className="font-inter text-md">{manga_data?.description}</p>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 gap-y-[44px]">
        {manga_data?.items.map((item) => (
          <MangaCard mangaDetails={item} type={type} />
        ))}
      </div>
    </div>
  );
}
