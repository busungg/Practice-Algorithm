function solution(relation) {
  var answer = 0;

  //column 개수: 1~8
  //row 개수: 1~20
  let colLen = relation[0].length,
    rowLen = relation.length,
    columns;

  //조합으로 사용될 column의 index
  let colIdx = [];

  //1컬럼으로 유일성을 확보할 시 후보키에서 제외
  for (let i = 0; i < colLen; i++) {
    columns = [];
    for (let j = 0; j < rowLen; j++) {
      columns.push(relation[j][i]);
    }

    if (isUnique(columns, rowLen)) {
      answer += 1;
    } else {
      colIdx.push(i);
    }
  }

  //조합으로 후보키 생성
  const combinations = [];
  getCombination(colIdx, combinations);

  const candidateKeys = [];
  combinations.forEach((combination) => {
    let isDuplicated = false;
    candidateKeys.forEach((candidateKey) => {
      let count = 0;
      for (let i = 0; i < candidateKey.length; i++) {
        if (combination.indexOf(candidateKey[i]) !== -1) {
          count++;
        }
      }

      if (count === candidateKey.length) {
        isDuplicated = true;
      }
    });

    if (!isDuplicated) {
      let columnHash;
      columns = [];
      for (let i = 0; i < rowLen; i++) {
        columnHash = "";
        for (let j = 0; j < combination.length; j++) {
          columnHash += relation[i][combination[j]];
        }
        columns.push(columnHash);
      }

      if (isUnique(columns, rowLen)) {
        answer += 1;
        candidateKeys.push(combination);
      }
    }
  });

  return answer;
}

//Unique 확인
function isUnique(columns, rowLen) {
  let unique = new Set(columns);

  if (rowLen === unique.size) {
    return true;
  }

  return false;
}

//후보키 컬럼 조합
function getCombination(colIdx, result) {
  function reputation(array, combi, n) {
    if (combi.length === n) {
      result.push(combi);
    }

    for (let i = 0; i < array.length; i++) {
      reputation(array.slice(i + 1), [...combi, array[i]], n);
    }
  }

  for (let i = 2; i <= colIdx.length; i++) {
    reputation(colIdx, [], i);
  }
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
