export function debounce(func: (...args: any[]) => any) {
  let timer: ReturnType<typeof setTimeout>;

  function debounced(...args: any[]) {
    clearTimeout(timer);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    timer = setTimeout(() => func(args));
  }

  debounced.clear = function () {
    clearTimeout(timer);
  };

  return debounced;
}
