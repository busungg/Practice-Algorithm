const permutation = (numbers, depth) => {
    function recursive(subNumbers, subResult, result, depth) {
        if(depth === 0) {
            result.add(parseInt(subResult.join('')));
            return;
        }

        let afterNum, copyNumbers;
        for(let i = 0, len = subNumbers.length; i< len; i++) {
            afterNum = subNumbers[i];
            copyNumbers = [...subNumbers];
            copyNumbers.splice(i, 1);
            recursive(copyNumbers, [...subResult, afterNum], result, depth-1);
        }
    }

    const result = new Set();
    let firstNum, copyNumbers;
    for(let i = 0, len = numbers.length; i< len; i++) {
        firstNum = numbers[i];

        copyNumbers = [...numbers];
        copyNumbers.splice(i, 1);
        recursive(copyNumbers, [firstNum], result, depth-1);
    }

    return result;
};


function solution(baseball) {
    var answer = [];
    
    const possible = permutation([1,2,3,4,5,6,7,8,9], 3);

    possible.forEach(item => {
        const numbers = [parseInt(item / 100), parseInt((item % 100) / 10), parseInt(item % 10)];
        let isAnswer = 0, strike = 0, ball = 0,numbersAnswer;
        for(let i = 0, len = baseball.length; i < len; i++) {
            numbersAnswer = [parseInt(baseball[i][0] / 100), parseInt((baseball[i][0] % 100) / 10), parseInt(baseball[i][0] % 10)];

            strike = ball = 0;
            for(let j = 0; j < 3; j++) {
                for(let k = 0; k < 3; k++) {
                    if(numbers[j] === numbersAnswer[k]) {
                        if(j === k) {
                            strike++;
                        } else {
                            ball++;
                        }
                    }
                }
            }

            if(strike === baseball[i][1] && ball === baseball[i][2]) {
                isAnswer++;
            }
        }

        if(isAnswer === baseball.length) {
            answer.push(item);
        }
    });

    return answer.length;
}

/**
 * function solution(baseball) {
        var answer = 0;

        // 서로 다른 3개의 수 조합. 
        for(let i=123; i<=987; i++) {
            let [x, y, z] = (i+"").split('');

            // 각 수의 범위는 1~9 
            if(x === "0" || y === "0" || z === "0") continue;
            if(x === y || x === z || y === z) continue;

            for(let j=0; j<baseball.length; j++) {
                let strike = 0;
                let ball = 0;

                const [query, query_s, query_b] = baseball[j];
                const [query_x, query_y, query_z] = (query + "").split('');
                if(query_x === "0" || query_y === "0" || query_z === "0") break;
                if(query_x === query_y || query_x === query_y || query_y === query_z) break;

                if(x === query_x) strike++;
                if(y === query_y) strike++;
                if(z === query_z) strike++;
                if(query_s != strike) break;

                if((x === query_y) || (x === query_z)) ball++;
                if((y === query_x) || (y === query_z)) ball++;
                if((z === query_x) || (z === query_y)) ball++;
                if(query_b != ball) break;

                if(j === baseball.length - 1) answer++;
            }
        }


        return answer;
    } 
 */

console.log(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]));