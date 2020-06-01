function solution(answers) {
    var answer = [];

    const randAnswer1 = [1,2,3,4,5];
    const randAnswer2 = [2,1,2,3,2,4,2,5];
    const randAnswer3 = [3,3,1,1,2,2,4,4,5,5];

    const result = [[1,0], [2, 0], [3, 0]];
    answers.forEach((value, idx) => {
        if(randAnswer1[idx % randAnswer1.length] === value) {
            result[0][1]++;
        }

        if(randAnswer2[idx % randAnswer2.length] === value) {
            result[1][1]++;
        }

        if(randAnswer3[idx % randAnswer3.length] === value) {
            result[2][1]++;
        }
    });

    const MAX = Math.max(result[0][1], result[1][1], result[2][1]);
    answer = result.filter(value=>{
        return value[1] === MAX;
    }).map(value => {
        return value[0];
    }).sort((a, b)=>{
        return a - b;
    });

    return answer;
}

console.log(solution([1,2,3,4,5]), [1]);
console.log(solution([1,3,2,4,2]), [1,2,3]);

/*
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
*/