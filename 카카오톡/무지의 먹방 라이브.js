function solution(food_times, k) {
  const sortedFoodTimes = food_times
    .map((time, idx) => {
      return { time, idx: idx + 1 };
    })
    .sort((a, b) => {
      return a.time - b.time;
    });

  let elapsedTime = 0,
    len = 0;
  for (let i = 0; i < sortedFoodTimes.length; i++) {
    len = sortedFoodTimes.length - i;
    elapsedTime =
      (sortedFoodTimes[i].time - (i === 0 ? 0 : sortedFoodTimes[i - 1].time)) *
      len;
    if (k < elapsedTime) {
      return sortedFoodTimes.slice(i).sort((a, b) => {
        return a.idx - b.idx;
      })[k % len].idx;
    }

    k -= elapsedTime;
  }

  return -1;
}

console.log(solution([3, 1, 2], 5));
console.log(solution([3, 1, 2, 5], 5));
console.log(solution([1, 1, 1, 1], 5));
console.log(solution([1, 2], 2));

/**
 * Rule
 * 1. 원형 큐
 * 2. 1초동안 섭취 후 다음 음식을 섭취
 * 3. 음식 이동시간 없음
 * 4. 더 섭취할 음식이 없다면 -1 반환
 *
 * 알고리즘
 * 1. 원형 큐 생성 - 배열을 원형 큐로 생각
 * 2. 음식 남아 있는지 확인
 * 3. 음식 남아 있으면 -1
 * 4. 음식 없으면 음식 목록 삭제 다음 음식으로 이동
 * 5. 모든 음식 없을 시 -1 return
 */

/**
  * 정확도 테스트 100% 
  //Init food index
  const foodIdx = [];
  for (let i = 0; i < food_times.length; i++) {
    foodIdx.push(i);
  }

  let pos = 0,
    elapsedTime = 0;
  while (elapsedTime < k) {
    if (foodIdx.length === 0) {
      return -1;
    }

    if (pos >= foodIdx.length) {
      pos = 0;
    }

    food_times[foodIdx[pos]] -= 1;
    if (food_times[foodIdx[pos]] === 0) {
      foodIdx.splice(pos, 1);
    } else {
      pos++;
    }

    console.log("foods", food_times);
    console.log("food idx", foodIdx);

    elapsedTime++;
  }

  if (foodIdx.length === 0) {
    return -1;
  }

  if (pos >= foodIdx.length) {
    pos = 0;
  }

  answer = foodIdx[pos] + 1;
  */
