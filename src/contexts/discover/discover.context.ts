import type { DiscoverContextType } from "@/types/discover.types";
import { createContext } from "react";

export const DiscoverContext = createContext<DiscoverContextType | undefined>(
  undefined
);
