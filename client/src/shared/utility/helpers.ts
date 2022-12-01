export const debounceFunction = (func: Function, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
