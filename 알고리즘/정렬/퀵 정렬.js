/**
 * 분할 정보에 기반한 알고리즘
 * 1. 데이터 집합내에서 임의의 기준 요소를 선택하고 기준 요소보다 작은 요소들은 순서에 관계없이
 *  기준요소의 왼편에, 큰 요소는 오른편에 위치
 * 2. 나눈 데이터 집합들을 다시 1에서와 같이 임의의 기준 요소를 선택하고 같은 방법으로 데이터 집합을 분할
 * 3. 더 이상 데이터 집합을 나눌 수 없을 때까지 반복하면 정렬된 데이터 집합을 얻게 됨
 *
 * 수색 섬멸 => 왼쪽부터 오른쪽 방향으로 데이터 집합 검사하면서 기준보다 큰 요소 찾기
 *          => 오른쪽에서 왼쪽 방향으로 데이터 집합 검사하면서 기준보다 작은 요소 찾기
 *          => 찾은 두 요소를 교환
 *          => left, right index가 접선하면 기준 요소를 왼쪽 데이터 집합의 마지막 요소와 교환하는 것으로 끝
 */

const partition = (array, left, right) => {
  const first = left;
  const pivot = array[first];

  let tmp;
  while (1) {
    while (array[left] <= pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left < right) {
      tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
    } else {
      break;
    }
  }

  tmp = array[first];
  array[first] = array[right];
  array[right] = tmp;

  return right;
};

const quickSort = (array, left, right) => {
  if (left < right) {
    const index = partition(array, left, right);

    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);
  }
};

const array = (function (len) {
  const values = [];
  for (let i = 0; i < len; i++) {
    values.push(parseInt(Math.random() * 100 + 1));
  }

  return values;
})(20);

console.log(array);
quickSort(array, 0, array.length - 1);
console.log(array);
