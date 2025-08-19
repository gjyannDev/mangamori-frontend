import type React from "react";

export type DiscoverType = "trending" | "toprated" | "newrelease";

export interface CombinedDiscoverData {
  title: string;
  type: DiscoverType;
  items: DiscoverData[];
}

export interface DiscoverContextType {
  trending: DiscoverData[];
  topRated: DiscoverData[];
  newRelease: DiscoverData[];
  combinedDiscoverData: CombinedDiscoverData[];
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
  type: DiscoverType;
}

export interface MangaContextType {
  manga: DiscoverData;
}

export interface MangaProviderProps {
  children: React.ReactNode;
}

export interface MangaLoaderTypes {
  id: string;
  type: string;
}

export interface MangaByIdTypes {
  id: string | undefined;
  type: string | undefined;
}
