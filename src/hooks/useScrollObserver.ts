import { Pageable } from "@/types/api/common";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export function useScrollObserver<T>(
  hasNextPage: boolean,
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<InfiniteData<Pageable<T>, unknown>, Error>
  >
) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);
  return { observerRef };
}
