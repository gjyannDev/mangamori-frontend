import HomepageCard from "@/components/cards/HomepageCard";
import { Button } from "@/components/ui/button";
import { ChartNoAxesColumnIncreasing, Pin, Telescope } from "lucide-react";
import hero_image from "../../assets/image/hero_section_image.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[124px]">
      <div className="flex flex-col gap-12 items-center justify-center mt-10">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-playfair font-bold text-5xl max-w-2xl text-center leading-[1.5]">
              Discover, Track, and Celebrate Your Manga Journey
            </h1>
            <p className="font-inter max-w-lg text-center leading-[1.3]">
              Explore trending titles, log your reading progress, and curate
              your personal manga library—all in one place.
            </p>
          </div>
          <Button className="mt-6 text-base-white py-5 px-9">
            Start your journey
          </Button>
        </div>
        <div className="">
          <img src={hero_image} className="w-[824px]" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[4.5rem]">
        <h1 className="flex font-playfair font-bold text-3xl self-center max-w-xl text-center">
          MangaMori is your manga & manhwa journal.
        </h1>
        <div className="flex gap-14">
          <HomepageCard
            icon={Telescope}
            title="Find your next read"
            description="Browse and search a growing catalog of manga and manhwa. Discover trending, top-rated, and genre-based picks curated just for you."
          />
          <HomepageCard
            icon={Pin}
            title="Track your journey"
            description="Easily log chapters as you read. Organize titles into Reading, Completed, Plan to Read, or Dropped lists. Track progress with chapter counters and status tags."
          />
          <HomepageCard
            icon={ChartNoAxesColumnIncreasing}
            title="Create your space"
            description="Sign up to personalize your experience. Save favorites, manage your lists, and explore a visual dashboard of your reading stats."
          />
        </div>
      </div>
    </div>
  );
}
