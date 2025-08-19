import type {
  DiscoverContextType,
  MangaContextType,
} from "@/types/discover.types";
import { createContext } from "react";

export const DiscoverContext = createContext<DiscoverContextType | undefined>(
  undefined
);

export const MangaContext = createContext<MangaContextType | undefined>(
  undefined
);
