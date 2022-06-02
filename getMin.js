export default (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const module = arr.map((el) => Math.abs(el));
  const min = Math.min(...[module]);
  return min;
};
