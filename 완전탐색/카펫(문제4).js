function solution(brown, yellow) {
    var answer = [];

    const total = brown + yellow;
    let width, height;
    for(let i = 2; i < total; i++) {
        if(total % i === 0 && total / i <= i) {
            width = i;
            height = total / i;

            if((width - 2) * (height - 2) === yellow) {
                answer.push(width);
                answer.push(height);
                break;
            }
        } 
    }

    return answer;
}

/**
 * 1. yellow와 brown 블록을 합쳐서 만들 수 있는 모든 직사각형을 생각해보면
 *    yellow와 brown 블록의 나눗셈이 딱 떨어질 때 이다.
 * 
 * 2. 나눗셈으로 딱 떨어진 결과중에 width값이 높거나 같아야 하므로 해당 조건을 설정한다.
 * 
 * 3. 그 후 무조건 brown 블록은 테두리 1줄 이므로 
 *    width - 2 * height -2 = yellow 블록의 개수이다. (width 와 height에서 2를 빼주는 이유는 yellow 블록을 감싸기 위해 brown 블록이 2개씩 더 필요하기 때문이다.)
 */

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

/*
    function solution(brown, red) {
    var answer = [];
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }

    return [x,i];
}
*/