function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let midPoint = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midPoint);
    let rightArray = array.slice(midPoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}
