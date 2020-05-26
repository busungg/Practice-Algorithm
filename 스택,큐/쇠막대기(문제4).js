function solution(arrangement) {
    var answer = 0;

    const stack = [];
    const pos_razor = [];
    const pos_bar = [];

    let prev, top;

    stack.push([arrangement[0], 0]);
    for(let i = 1, len = arrangement.length; i < len; i++) {
        stack.push([arrangement[i], i]);

        if(stack.length >= 2) {
            prev = stack[stack.length-2];
            top = stack[stack.length-1]

            if(prev[0] + top[0] === '()') {
                if(top[1] - prev[1] === 1) {
                    pos_razor.push(i);
                } else {
                    pos_bar.push([prev[1], top[1]]);
                }
    
                stack.pop();
                stack.pop();
            }
        }
    }

    let divide = 0;
    for(const bar of pos_bar) {
        for(const razor of pos_razor) {
            if(bar[0] < razor && razor < bar[1]) {
                divide++;
            }
        }

        answer += (divide + 1);
        divide = 0;
    }


    return answer;
}

console.log(solution('()(((()())(())()))(())'));


/**
 * function solution(arrangement) {
    let answer = 0,
        stack = [];

    arrangement = arrangement.replace(/\(\)/g, 0);

    for (let i = 0; i < arrangement.length; i++) {
        switch (arrangement[i]) {
            case '(' :
                stack.push(0);
                break;
            case '0':
                stack = stack.map(v => v + 1);
                break;
            case ')':
                answer += stack[stack.length - 1] + 1;
                stack.pop();
                break;
        }
    }

    return answer;
}
 * 
 * 
 */