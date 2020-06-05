function solution(p) {
    var answer = '';

    answer = recursive([...p]);

    return answer;
}

function recursive(p) {
    if(p.length === 0) return '';

    let left = 0, right = 0;
    let shift, u = '', check = '', empty = '';

    do {
        shift = p.shift();
        u += shift;
        check += shift;
        if(check.length >= 2) {
            if(check[check.length - 2] + check[check.length - 1] === '()') {
                check = check.replace('()', '');
            }
        }

        if('(' === u[u.length - 1]) {
            left++;
        } else {
            right++;
        }

        if(left === right) {
            if(check.length === 0) {
                return u += recursive(p);
            } else {
                empty += '(';
                empty += recursive(p);
                empty += ')';
                let uArray = [...u];
                uArray.shift();
                uArray.pop();

                for(const text of uArray) {
                    empty += (text === '(' ? ')' : '(');
                }

                return empty;
            }
        }

    } while(p.length !== 0);

    return u;
}

//console.log(solution("(()())()"));
//console.log(solution(")("));
console.log(solution("()))((()"));