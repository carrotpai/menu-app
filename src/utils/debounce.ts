/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export function debounce(func: (...args: any[]) => any, time: number) {
  let timer: ReturnType<typeof setTimeout>;

  function debounced(...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), time);
  }

  debounced.clear = function () {
    clearTimeout(timer);
  };

  return debounced;
}
