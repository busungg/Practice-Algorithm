/*
 * Javascript sort는 mergesort를 사용한다.
 */

function solution(operations) {
    var answer = [];

    const queue = [];
    let commands;
    while(operations.length !== 0) {
        commands = operations.shift().split(' ');
        if(commands[0] === 'I') {
            queue.push(parseFloat(commands[1]));

            if(queue.length > 1) {
                queue.sort((a,b) => {
                    return b - a;
                })
            }
        } else {
            if(queue.length > 0) {
                switch(parseInt(commands[1])){
                    case 1:
                        queue.shift();
                    break;
    
                    case -1:
                        queue.pop();
                    break;
                }
            }
            
        }
    }

    if(queue.length === 0) {
        answer = [0,0];
    } else {
        answer = [queue[0], queue[queue.length-1]];
    }

    return answer;
}

console.log(solution(['I 16','D 1']), [0,0]);
console.log(solution(['I 7','I 5', 'I -5', 'D -1']), [7,5]);