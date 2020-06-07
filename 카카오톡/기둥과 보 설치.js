function solution(n, build_frame) {
    var answer = [];

    /*
        * 자기 위치만 1로 표시 하면 알아서 연결이 된다.

        1. 기둥
            1) 위치 아래 바닥
            2) 위치 보 설치
            3) 위치 왼쪽에 보 설치
            4) 위치 아래가 기둥

        2. 보
            1) 위치 아래가 기둥
            2) 위치 오른쪽 아래가 기둥
            3) 위치 왼쪽 오른쪽 모두 보가 설치됨
    */

    const cols = [], rows = [];
    for(let i = 0; i <= n; i++) {
        cols.push([]);
        rows.push([]);
        for(let j = 0; j <= n; j++) {
            cols[i].push(0);
            rows[i].push(0);
        }
    }

    let posX, posY, isCol, isInsert;
    build_frame.forEach((frame) => {
        posX = frame[0], posY = frame[1], isCol = (frame[2] === 0 ? true : false), isInsert = (frame[3] === 0 ? false : true);

        if(isInsert) {
            if(isCol && isExistCol(rows, cols, posX, posY)) {
                cols[posX][posY] = 1;
                answer.push([posX, posY, frame[2]]);
            } else if(!isCol && isExistRow(rows, cols, posX, posY)) {
                rows[posX][posY] = 1;
                answer.push([posX, posY, frame[2]]);
            }
        } else {
            if(canRemove(rows, cols, answer, posX, posY, isCol)) {
                for(let i = 0; i < answer.length; i++) {
                    if(answer[i][0] === posX && answer[i][1] === posY && answer[i][2] === frame[2]) {
                        answer.splice(i, 1);
                        break;
                    }
                }
            }
        }
    });

    answer.sort((a,b)=>{
        if(a[0] - b[0] === 0) {
            if(a[1] - b[1] === 0) {
                return a[2] - b[2];
            } else {
                return a[1] - b[1];
            }
        } else {
            return a[0] - b[0];
        }

    });

    return answer;
}

function isExistCol(rows, cols, x, y) {
    try {
        return y === 0 || cols[x][y - 1] === 1 || rows[x][y] === 1 || rows[x - 1][y] === 1;
    } catch(e) {
        return false;
    }
}

function isExistRow(rows, cols, x, y) {
    try {
        return cols[x][y - 1] === 1 || cols[x + 1][y - 1] === 1 || (rows[x - 1][y] === 1 && rows[x + 1][y] === 1);
    } catch(e) {
        return false;
    }
}

function canRemove(rows, cols, answer, x, y, isCol) {
    let isRemove = true;

    if(isCol) {
        cols[x][y] = 0;
    } else {
        rows[x][y] = 0;
    }

    for(let i = 0; i < answer.length; i++) {
        if(answer[i][2] === 0) {
            if(!isExistCol(rows, cols, answer[i][0], answer[i][1])) {
                isRemove = false;
                break;
            }
        } else {
            if(!isExistRow(rows, cols, answer[i][0], answer[i][1])) {
                isRemove = false;
                break;
            }
        }
    }

    if(!isRemove) {
        if(isCol) {
            cols[x][y] = 1;
        } else {
            rows[x][y] = 1;
        }
    }

    return isRemove;
}

//console.log(solution(5, [[1,0,1,1], [0,0,0,1], [4,1,1,1], [0,1,1,1]]));

/*
 console.log(solution(5, [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]), 
     [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]);
*/

 console.log(solution(5, [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]), 
     [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]);