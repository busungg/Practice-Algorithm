function solution(n, build_frame) {
    var answer = [];

    /*
        보 같은 경우 n 이상 넘어가면 안됨
        기둥 같은 경우 n 이상 넘어가면 안됨
    */

    let tempFrame, tempBar;
    build_frame.forEach(frame => {
        let posX = frame[0], posY = frame[1];

        if(frame[3] === 1) { //설치
            if(frame[2] === 0) { //기둥 설치 시 
                // 1. N 넘어가는지 확인
                // 2. 바닥 위
                // 3. 보의 한쪽 끝 부분
                // 4. 다른 기둥 위

                if(posX <= n && posY < n) {
                    if(posY === 0) {
                        answer.push([posX, posY, frame[2]]);
                    } else { //기둥이나 보를 찾아야 할 때
                        tempFrame = answer.filter((value) => {
                            let endX = 0, endY = 0;
                            if(value[2] === 0) { //기둥
                                endY += 1; //시작위치에서 한칸 올라간다.
                            } else {
                                endX += 1;//시작위치에서 한칸 오른쪽으로 간다.
                            }

                            if(value[0] + endX === posX  && value[1] + endY === posY) {
                                return true;
                            } else {
                                return false;
                            }
                        });

                        if(tempFrame.length > 0) {
                            answer.push([posX, posY, frame[2]]);
                        }

                        /*
                        if() { //보의 한쪽 끝

                        } else if() { //다른 기둥 위
    
                        }
                        */
                    }
                } else {
                    return;
                }
            } else { //보 설치 시
                // 1. N 넘어가는지 확인
                // 2. 바닥 위는 안됨
                // 3. 한쪽 끝 부분이 기둥 위
                // 4. 양쪽 끝부분이 다른 보와 동시에 연결

                if(posX < n && posY <= n) {
                    if(posY === 0) { //바닥 위는 안됨
                        return;
                    } else {
                        tempFrame = answer.filter((value) => {
                            if(value[2] === 0) { //기둥
                                if(value[0] === posX  && value[1] + 1 === posY) {
                                    return true;
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        });

                        tempBar = answer.filter((value) => {
                            if(value[2] === 1) { //바
                                if(value[0] + 1 === posX  && value[1] === posY) { //설치할 바 왼쪽에 위치한 바
                                    return true;
                                } else if(value[0] === posX + 1 && value[1] === posY) { //설치할 바 오른쪽에 위치한 바
                                    return true;
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        });

                        if(tempFrame.length > 0) {
                            answer.push([posX, posY, frame[2]]);
                        }

                        if(tempBar.length > 1) {
                            answer.push([posX, posY, frame[2]]);
                        }
                    }
                } else {
                    return;
                }
            }
        } else { //삭제

            if(frame[2] === 0) {
                // 기둥 삭제 시
                // 1. 위에 바가 있는지 확인 필요
                // 2. 위에 바가 양쪽 끝이랑 연결 되어 있는지 확인
                // 3. 위에 기둥이 있는지 확인 필요

                tempFrame = answer.filter((value) => { //위에 기둥이 있는지 확인
                    if(value[2] === 0) { //기둥
                        if(value[0] === posX && value[1] === posY + 1) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                });

                tempBar = answer.filter((value) => { //위에 바 있는지 화인
                    //length 가 1이라면 양쪽 끝 유지 안되서 삭제 실패
                    //length 가 3이라면 양쪽 끝 유지 되서 삭제 가능
                    if(value[2] === 1) { //기둥
                        if(value[0] === posX && value[1] === posY + 1) {
                            return true;
                        } else if(value[0] === posX - 1 && value[1] === posY + 1) {
                            return true;
                        } else if(value[0] === posX + 1 && value[1] === posY + 1) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                });

                if((tempFrame.length === 0 && tempBar.length === 0) || tempBar.length === 3) {
                    for(let i = 0; i < answer.length; i++) {
                        if(answer[i][0] === posX && answer[i][1] === posY && answer[i][2] === 0) {
                            answer.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    return;
                }
            } else {
                // 1. Bar 삭제 시
                // 2. 양쪽에 연결된 바가 있는지 
                //  1) 하나라도 있으면 그 연결된 바 밑에 기둥이 있는지 - 없으면 삭제 못함
                //  2) 없으면 삭제 가능
                // 3. 위에 기둥이 있는지 확인 필요
                tempFrame = answer.filter((value) => { //위에 기둥이 있는지 확인
                    if(value[2] === 0) { //기둥
                        if(value[0] === posX && value[1] === posY) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                });

                tempBar = answer.filter((value) => {
                    //length 가 1이라면 양쪽 끝 유지 안되서 삭제 실패
                    //length 가 3이라면 양쪽 끝 유지 되서 삭제 가능
                    if(value[2] === 1) { //기둥
                        if(value[0] === posX && value[1] === posY) {
                            return true;
                        } else if(value[0] === posX - 1 && value[1] === posY) {
                            return true;
                        } else if(value[0] === posX + 1 && value[1] === posY) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                });

                let checkBar = false;
                if(tempBar.length === 0) {
                    checkBar = true;
                } else {
                    let frameWithBar;
                    for(let i = 0; i < tempBar.length; i++) {
                        frameWithBar = answer.filter((value)=>{
                            if(tempBar[i][0] === value[0] && tempBar[i][1] === value[1] + 1 && value[2] === 0) {
                                return true;
                            } else {
                                return false;
                            }
                        });

                        if(!frameWithBar) {
                            checkBar = false;
                            break;
                        }
                    }
                }

                if(tempFrame === 0 && checkBar){
                    for(let i = 0; i < answer.length; i++) {
                        if(answer[i][0] === posX && answer[i][1] === posY && answer[i][2] === 1) {
                            answer.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    return;
                }
            }

        }
    });

    return answer;
}

console.log(solution(5, [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]), 
    [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]);


console.log(solution(5, [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]), 
    [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]);