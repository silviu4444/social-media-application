import { useEffect, useState } from 'react';
import { debounceFunction } from 'src/shared/utility/helpers';

const useRestoreScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScrollYChange = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', debounceFunction(handleScrollYChange, 250));
    return () => {
      window.removeEventListener('scroll', debounceFunction(handleScrollYChange, 250));
    };
  }, []);

  return scrollPosition;
};

export default useRestoreScroll;
