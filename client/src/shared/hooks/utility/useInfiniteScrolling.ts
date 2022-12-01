import { useCallback, useRef } from 'react';

interface useInfiniteScrollingProps {
  isFetching: boolean;
  hasMoreItems: boolean;
  callback: () => any;
}

const useInfiniteScrolling = ({ isFetching, hasMoreItems, callback }: useInfiniteScrollingProps) => {
  const observer = useRef() as any;
  return useCallback(
    node => {
      if (isFetching) return;
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMoreItems) {
          callback();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, hasMoreItems]
  );
};

export default useInfiniteScrolling;
