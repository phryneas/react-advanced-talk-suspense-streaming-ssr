import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useSlideNavigation(slides: string[]) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    function listener(ev: KeyboardEvent) {
      const currentSlideIndex = slides.indexOf(pathname);
      console.log({ currentSlideIndex, pathname, slides });
      if (ev.key === "ArrowRight") {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex < slides.length) {
          router.push(slides[nextSlideIndex]);
        }
      }
      if (ev.key === "ArrowLeft") {
        const prevSlideIndex = currentSlideIndex - 1;
        console.log({ prevSlideIndex });
        if (prevSlideIndex >= 0) {
          router.push(slides[prevSlideIndex]);
        }
      }
      console.log(ev.key);
      if (ev.key === "f") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }
      }
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [slides, pathname, router]);
  const currentSlideIndex = slides.indexOf(pathname);
  if (currentSlideIndex === -1) {
    router.push(slides[0]);
  }
}
