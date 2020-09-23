function binarySearch(array, size, target) {
  let left, right, mid;
  left = 0;
  right = size - 1;

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    if (target == array[mid]) {
      return { target, index: mid };
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 9));
