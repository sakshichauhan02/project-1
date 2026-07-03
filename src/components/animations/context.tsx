"use client";

import { createContext, useContext } from "react";

export interface StaggerContextType {
  isInStagger: boolean;
}

export const StaggerContext = createContext<StaggerContextType>({
  isInStagger: false,
});

export const useStagger = () => useContext(StaggerContext);
