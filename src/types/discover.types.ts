import type React from "react";

export interface DiscoverContextType {
  trendingData: DiscoverItem[];
}

export interface DiscoverItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface DiscoverProviderProps {
  children: React.ReactNode;
}
