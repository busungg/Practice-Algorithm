function solution(heights) {
    var answer = [];

    for(let i = heights.length - 1; i > 0; i--) {
        for(let j = i -1; j >= 0; j--) {
            if(heights[j] > heights[i]) {
                answer[i] = j+1;
                break;
            } else if(j === 0) {
                answer[i] = 0;
            }
        }
    }

    answer[0] = 0;

    return answer;
}

console.log(solution([1, 5, 3, 6, 7, 6, 5]));