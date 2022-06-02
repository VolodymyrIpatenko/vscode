export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const min = Math.min.apply(
    null,
    arr.map((el) => Math.abs(el))
  );
  return min * min;
};
