function solution(citations) {
    citations.sort((a, b) => {
        return a - b;
    });

    //인용된 논문 개수
    let h = citations.length, quotation;
    const quotationArray = [];

    for(let i = citations.length-1; i >= 0; i--) {

    }


    while(h !== 0) {
        quotation = citations[h - 1];

        quotationArray.push([h, ])

        h -= 1;
    }

    return quotationArray.length;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([0, 0, 0, 0, 0]), 5);
console.log(solution([10, 1]), 1);
console.log(solution([0, 1, 1, 1, 1, 3, 3, 4]), 3);
console.log(solution([5,5,5,5]), 4);
console.log(solution([5,5,5,5,5]), 5);

/*
 * 
    * 문제 1.
        네 편의 논문 인용횟수가 [9,9,8,7]이면 H-Index가 존재하지 않아요.

        h = 9)
        9번 이상 인용된 논문 2개
        h = 8)
        8번 이상 인용된 논문 3개
        h = 7)
        7번 이상 인용된 논문 4개
        h < 7)
        4번 이상 인용된 논문 4개 but 4번 이하 인용된 논문 없음

        문제에 결함이 있습니다
        

    답변:
        h=4로 '4'번 이상 인용된 논문이 4개 이상(4개)이고 4번 이하 인용된 논문이 4개 이하(0개)이므로 H-Index는 4가 맞습니다. 
        논문이 0개라는것도 4개 이하는 맞으니까 성립하는 걸로 받아들였습니다


    * 문제 2.
        [22, 42] 라면

    답변
        2 편 중, 2번 이상 인용된 논문이 2편 이상이고 나머지 논문이 2번 이하 인용 되었다면 2가 이 과학자의 H-Index입니다.
 */