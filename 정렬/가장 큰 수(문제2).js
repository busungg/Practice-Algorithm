function solution(numbers) {
    numbers.sort((a, b) => {
        const numA = ''+a+b;
        const numB = ''+b+a;

        if(parseInt(numA) > parseInt(numB)) {
            return -1;
        } else {
            return 1;
        }

    });

    if(!parseInt(numbers.join(''))){
        return '0';
    }

    return numbers.join('');
}

console.log(solution([6,10,2]));
console.log(solution([3, 30, 34, 5, 9]));