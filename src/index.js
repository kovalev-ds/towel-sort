// You should implement your task here.

module.exports = function towelSort(matrix) {
  return (
    matrix?.reduce(
      (acc, arr, i) =>
        i % 2 === 0 ? [...acc, ...arr] : [...acc, ...arr.reverse()],
      []
    ) ?? []
  );
};
