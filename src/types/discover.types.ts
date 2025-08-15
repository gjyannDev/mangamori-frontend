import type React from "react";

export interface DiscoverContextType {
  trendingData: DiscoverData[];
  topRatedData: DiscoverData[];
  newReleaseData: DiscoverData[];
  combinedDiscoverData: {
    title: string;
    items: DiscoverData[];
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
