import { useEffect, useRef } from "react";

export function useInfiniteScroll(callback: () => void, canFetch: boolean) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && canFetch) {
          callback();
        }
      },
      { threshold: 0.8 }
    );

    const ref = observerRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [callback, canFetch]);

  return observerRef;
}