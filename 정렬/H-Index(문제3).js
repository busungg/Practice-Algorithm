function solution(citations) {
    const result = [];
    
    citations.sort((a, b) => {
        return a - b;
    });

    /*
        h번 인용된 논문이 h편 이상일 때
    */
    const quotationArray = [];
    while(citations.length !== 0) {
        quotationArray.unshift(citations.pop());

        if(quotationArray[0] <= quotationArray.length) {
            result.push(quotationArray[0]);
        }
    }

    /*
        h번 인용된 논문이 h편 이상이 아닐 시
    */
    let h = quotationArray.length;
    while(h !== 0) {
        if(quotationArray.filter((value)=> { return value >= h }).length >= h) {
            result.push(h);
        }
        h--;
    }

    /*
        모든 답변을 구한다음 그 중 가장 큰 수를 return; 
     */
    result.sort((a, b) => {
        return b - a;
    });

    return result[0];
}

console.log(solution([0]), 0);
console.log(solution([1]), 1);
console.log(solution([3, 0, 6, 1, 5]), 3);
console.log(solution([0, 0, 0, 0, 0]), 0);
console.log(solution([10, 1]), 1);
console.log(solution([0, 1, 1, 1, 1, 3, 3, 4]), 3);
console.log(solution([5,5,5,5]), 4);
console.log(solution([5,5,5,5,5]), 5);
console.log(solution([2,7,5]), 2);
console.log(solution([22, 42]), 2);
console.log(solution([20, 19, 18, 1]), 3);

/*
 * 

    * 문제 3.
        tc: [22, 42] ret:2
    
    답변 
        1. [20,19,18,1] 인용수가 18개 이상이어도 18편이 아니므로 
            답이 1인 줄 알고 헤매다 3개이상 3편도 맞으므로 3입니다.
 */


 /**
  * 좋은 답변
        function solution(citations) {
            citations = citations.sort(sorting);
            var i = 0;
            while(i + 1 <= citations[i]){
                i++;
            }
            return i;


            function sorting(a, b){
                return b - a;
            }
        }
  * 
  */