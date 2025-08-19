import MangaCard from "@/components/cards/MangaCard";
import { Button } from "@/components/ui/button";
import { DiscoverContext } from "@/contexts/discover/discover.context";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function DiscoverOverviewPage() {
  const context = useContext(DiscoverContext);

  if (!context) {
    throw new Error("TrendingList must be used within a DiscoverProvider");
  }

  const { combinedDiscoverData } = context;

  return (
    <div className="flex flex-col gap-[56px] py-[64px]">
      {combinedDiscoverData.map((section, index) => (
        <div key={index} className="flex flex-col gap-[1.125rem]">
          <div className="flex justify-between">
            <h1 className="font-playfair font-bold text-4xl">
              {section.title}
            </h1>
            <div className="flex items-center cursor-pointer gap-2">
              <Button
                asChild
                variant="ghost"
                className="font-inter text-md cursor-pointer p-0"
              >
                <Link to={`/discover/${section.type}`}>See all</Link>
              </Button>
              <ChevronRight className="w-6" />
            </div>
          </div>

          <div className="flex gap-6">
            {section.items.map((item) => (
              <MangaCard mangaDetails={item} type={section.type} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
