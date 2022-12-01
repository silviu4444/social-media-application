import { useEffect, useState } from 'react';

const useDebounceValue = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceValue;
