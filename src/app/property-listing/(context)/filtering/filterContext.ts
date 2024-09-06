"use client";

import { createContext } from "react";

export interface FilterContext {
  currentLocation: string;
  bySuperhost: boolean;
  bedroomType: number;
  handleBedroomType: (type: string) => void;
  handleLocation: (location: string) => void;
  handleSuperhost: () => void;
}

export const filterContext = createContext<FilterContext | undefined>(
  undefined
);
