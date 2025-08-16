import type React from "react";

export interface DiscoverContextType {
  trendingData: DiscoverData[];
  topRatedData: DiscoverData[];
  newReleaseData: DiscoverData[];
  combinedDiscoverData: {
    title: string;
    items: DiscoverData[];
    type: "trending" | "top rated" | "new release";
  }[];
}

export interface DiscoverProviderProps {
  children: React.ReactNode;
}

export interface DiscoverData {
  id: string;
  type: string;
  title: string;
  description: string;
  lastVolume: string;
  lastChapter: string;
  status: string;
  year: number;
  statistics: {
    comments: {
      threadId: number;
      repliesCount: number;
    };
    follows: number;
    rating: {
      average: number;
      bayesian: number;
    };
    unavailableChaptersCount: number;
  };
  coverUrl: string;
}

export interface MangaCardTypes {
  mangaDetails: DiscoverData;
  type: "trending" | "top rated" | "new release";
}
