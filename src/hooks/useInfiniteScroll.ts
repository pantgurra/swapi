import { useEffect, useRef, useState } from "react";

const useInfiniteScroll = <T>(
  items: T[] | undefined,
  {
    increment = 5,
    enabled = true,
  }: { increment?: number; enabled?: boolean } = {}
) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !loadMoreRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && items) {
        setVisibleCount((v) => Math.min(v + increment, items.length));
      }
    });
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [items, enabled, increment, visibleCount]);

  return { visibleCount, loadMoreRef };
};

export default useInfiniteScroll;
