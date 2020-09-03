function solution(N, stages) {
  var answer = [];

  stages.sort((a, b) => {
    return a - b;
  });

  /**
   * 1. 오름차순으로 스테이지 정렬
   * 2. 정렬된 스테이지를 for문을 돌아 fail percent를 stage마다 기록
   *    1) start idx, end idx를 사용하면 됨
   *    2) 문제는 fail percent가 0인 stage가 존재 할 수 있음
   *    3) index를 쓸까 생각해봄 N 500이면 500 * 200000 이 될 수 있음
   */

  const infos = [{ stage: 0, percent: 0 }],
    len = stages.length;
  let beforeStage = 0,
    startIdx = 0;
  for (let i = 0; i < len; i++) {
    if (!infos[stages[i]]) {
      infos[beforeStage].percent = (i - startIdx) / (len - startIdx);

      startIdx = i;
      beforeStage = stages[i];
      infos[stages[i]] = { stage: stages[i], percent: 0 };
    }
  }
  infos[beforeStage].percent = (len - startIdx) / (len - startIdx);

  for (let i = 1; i <= N; i++) {
    if (!infos[i]) {
      infos[i] = { stage: i, percent: 0 };
    }
  }

  infos.sort((a, b) => {
    if (b.percent === a.percent) {
      return a.stage - b.stage;
    }
    return b.percent - a.percent;
  });

  for (const stage of infos) {
    if (stage.stage !== 0 && stage.stage <= N) {
      answer.push(stage.stage);
    }
  }

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(5, [5]));
