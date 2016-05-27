function partition(array, startIndex, endIndex) {
  const pivot = array[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i += 1) {
    if (array[i] <= pivot) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex += 1;
    }
  }

  [array[endIndex], array[pivotIndex]] = [array[pivotIndex], array[endIndex]];

  return pivotIndex;
}

function sort(array, startIndex, endIndex) {
  const length = array.length;
  startIndex = startIndex || 0;
  endIndex = endIndex === undefined ? length - 1 : endIndex;

  if (startIndex >= endIndex) {
    return;
  }

  const pivotIndex = partition(array, startIndex, endIndex);
  sort(array, startIndex, pivotIndex - 1);
  sort(array, pivotIndex + 1, endIndex);
  return array;
}

module.exports = sort;
