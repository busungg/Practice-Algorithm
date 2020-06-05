function solution(s) {
    var answer = Infinity;

    let prev, cur, count, result, j;
    for(let i = 1, len = s.length; i <= len; i++) {
        if(i === len) {
            if(answer > s.length) {
                answer = s.length;
            }

            break;
        } else {
            result = [], j = 0;
            while(1) {
                cur = s.slice(j, j + i);

                //stack 사용
                if(result.length > 0) {
                    prev = result.pop();
                    if(prev === cur) {
                        count = result.pop();
                        if(!count) {
                            result.push(2);
                        } else if(isNaN(count)) {
                            result.push(count);
                            result.push(2);
                        } else {
                            result.push(count+1);
                        }
                        result.push(prev);
                    } else {
                        result.push(prev);
                        result.push(cur);
                    }
                } else {
                    result.push(cur);
                }
                
                j += i;
                if(j > s.length) break;
            }
        }

        if(answer > result.join('').length) {
            answer = result.join('').length;
        }
    }
    return answer;
}

console.log(solution('a'));
console.log(solution('abbb'));
console.log(solution('aaaaaaaaaaaaaaaa'));
console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));