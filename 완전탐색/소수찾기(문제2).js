const permutationWithoutRepetitions = (numbers) => {
    function recursive(subNumbers, subResult, result) {
        if(subNumbers.length === 1) {
            subResult.push(subNumbers[0]);
            result.add(parseInt(subResult.join(''))); 
            return;
        }

        let afterNum, copyNumbers;
        for(let i = 0, len = subNumbers.length; i< len; i++) {
            afterNum = subNumbers[i];
            copyNumbers = [...subNumbers];
            copyNumbers.splice(i, 1);

            result.add(parseInt([...subResult, afterNum].join('')));
            recursive(copyNumbers, [...subResult, afterNum], result);
        }
    }

    const result = new Set(); //중복 삭제
    let firstNum, copyNumbers;
    for(let i = 0, len = numbers.length; i< len; i++) {
        firstNum = numbers[i];

        result.add(parseInt(firstNum));
        copyNumbers = [...numbers];
        copyNumbers.splice(i, 1);
        recursive(copyNumbers, [firstNum], result);
    }

    return result;
};

function solution(numbers) {
    var answer = 0;

    const allNumbers = permutationWithoutRepetitions([...numbers]);

    allNumbers.forEach((value) => {
        if(value === 0 || value === 1) return;

        let isPrime = true;
        for(let i = 2; i < value; i++) {
            if(value % i === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            answer++;
        }
    });

    return answer;
}

/**
 * for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num%i===0) return false;
    }
 */

// console.log(solution('17'));
// console.log(solution('011'));
//console.log(solution('1101112'));
console.log(solution('26910'));

// for(const value of solution('074')) {
//     console.log(value);
// }

// for(const value of solution([0,1,1])) {
//     console.log(value);
// }