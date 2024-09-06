"use client";

import { createContext } from "react";
import type { FilterContext } from "../../(models)";

export const filterContext = createContext<FilterContext | undefined>(
  undefined
);
