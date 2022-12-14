export const debounceFunction = (func: Function, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

export const base64ToMb = (base64EncodedString: string) =>
  Math.floor(base64EncodedString.replace(/=/g, '').length * 0.75) / 1000000;

export const mapNameInitials = (fullName: string) => {
  const splittedFullName = fullName.split(' ');
  return (
    splittedFullName[0][0].toUpperCase() +
    splittedFullName[splittedFullName.length - 1][0].toUpperCase()
  );
};
