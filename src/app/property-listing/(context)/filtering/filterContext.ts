"use client";

import { createContext } from "react";

export interface FilterContext {
  currentLocation: string;
  bySuperhost: boolean;
  handleLocation: (location: string) => void;
  handleSuperhost: () => void;
}

export const filterContext = createContext<FilterContext | undefined>(
  undefined
);
