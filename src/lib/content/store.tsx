"use client";

import React, { createContext, useContext } from "react";
import type { ContentOverrides } from "./types";

const ContentContext = createContext<ContentOverrides>({});

export function ContentProvider({ overrides, children }: { overrides: ContentOverrides; children: React.ReactNode }) {
  return <ContentContext.Provider value={overrides}>{children}</ContentContext.Provider>;
}

export function useContentOverrides() {
  return useContext(ContentContext);
}
