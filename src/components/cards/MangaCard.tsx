import type { MangaCardTypes } from "@/types/discover.types";
import { formatNumberWithCommas, roundNumber } from "@/utils/utils.number";
import { Heart, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function MangaCard({ mangaDetails, type }: MangaCardTypes) {
  return (
    <Card className="w-full p-0 shadow-none border-none rounded-none gap-0">
      <CardHeader className="p-0">
        <img
          src={mangaDetails.coverUrl}
          className="w-full h-[372px]"
          alt="Manga cover image"
        />
      </CardHeader>
      <CardContent className="p-0">
        <h2 className="font-playfair font-bold text-xl">
          {mangaDetails.title}
        </h2>
      </CardContent>
      <CardFooter className="flex justify-between p-0">
        <p className="font-inter">Fantasy</p>
        <div className="flex gap-2">
          {type === "trending" ? (
            <div className="flex gap-2">
              <Heart className="stroke-primary fill-primary w-5" />
              <p>{formatNumberWithCommas(mangaDetails.statistics.follows)}</p>
            </div>
          ) : type === "top rated" ? (
            <div className="flex gap-2">
              <Star className="stroke-yellow-200 w-5"/>
              <p>{roundNumber(mangaDetails.statistics.rating.average)}</p>
            </div>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
