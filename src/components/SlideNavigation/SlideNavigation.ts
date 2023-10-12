"use client";
import { useSlideNavigation } from "./useSlideNavigation";

export function SlideNavigation({ slides }: { slides: string[] }) {
  useSlideNavigation(slides);
  return null;
}
