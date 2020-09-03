function solution(key, lock) {
  var answer = true;

  const virtualKey = []; //[행, 열]
  for (let i = 0, len = lock.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (lock[i][j] === 0) {
        virtualKey.push([i, j]);
      }
    }
  }

  if (virtualKey.length === 0) return answer;

  answer = checkAllKeys(key, lock, virtualKey);

  return answer;
}

function checkAllKeys(key, lock, virtualKey) {
  const rotKeys = [],
    keyLen = key.length,
    lockLen = lock.length;
  let tempKey, originKey;

  for (let i = 0; i < 4; i++) {
    //0도 부터 시작 , i * 90도로 생각
    if (i === 0) {
      originKey = key;
    } else {
      originKey = rotKeys[i - 1];
    }

    tempKey = [];
    for (let j = 0; j < keyLen; j++) {
      tempKey.push([]);
      for (let k = 0; k < keyLen; k++) {
        tempKey[j][keyLen - 1 - k] = originKey[k][j];
      }
    }

    rotKeys.push(tempKey);
  }

  //한칸은 걸치도록 한다.
  let start = -(keyLen - 1),
    end = lockLen,
    isTrue;
  for (let rot = 0; rot < 4; rot++) {
    for (let startRow = start; startRow < end; startRow++) {
      for (let startCol = start; startCol < end; startCol++) {
        isTrue = true;

        if (startRow === end - 1 && startCol === end - 1) {
          console.log(startRow, startCol);
        }

        //startRow, startCol은 key의 시작점
        tempKey = [];
        for (let i = 0; i < keyLen; i++) {
          for (let j = 0; j < keyLen; j++) {
            if (
              startRow + i >= 0 &&
              startCol + j >= 0 &&
              startRow + i < lockLen &&
              startCol + j < lockLen &&
              rotKeys[rot][i][j] === 1
            ) {
              tempKey.push([startRow + i, startCol + j, rotKeys[rot][i][j]]);
            }
          }
        }

        if (tempKey.length === virtualKey.length) {
          for (let k = 0; k < tempKey.length; k++) {
            if (
              tempKey[k][2] !== 1 ||
              tempKey[k][0] !== virtualKey[k][0] ||
              tempKey[k][1] !== virtualKey[k][1]
            ) {
              isTrue = false;
              break;
            }
          }

          if (isTrue) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

/* 순열
 1. 90도로 4번 움직일 수 있으며
 2. 각 width, height값의 앞 뒤로 움직일 수 있다.
*/

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
