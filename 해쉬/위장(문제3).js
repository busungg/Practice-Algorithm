//만약 배열을 생성해야 한다면
function solution1(clothes) {
    var answer = 0;
    
    //IE를 위해 Map사용 X
    const hash = {};
    let combinations = [];
    clothes.forEach((cloth)=>{
        if(!hash[cloth[1]]) {
            if(combinations.length != 0) {
                const plusCombinations = [];
                for(let combination of combinations) {
                    plusCombinations.push([...combination, cloth[1]]);
                }
                combinations = [...combinations, ...plusCombinations];
            }

            combinations.push([cloth[1]]);
            hash[cloth[1]] = 1;
            return;
        }
        
        hash[cloth[1]]++;
    });

    combinations.forEach((combination) => {
        let combo = 1;
        combination.forEach((key)=> {
            combo *= hash[key];
        });

        answer += combo;
    })

    return answer;
}

console.log(solution1([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]));

//시간 단축
function solution(clothes) {
    var answer = 0;
    const hash = {};
    clothes.forEach((cloth)=>{
        if(!hash[cloth[1]]) {
            hash[cloth[1]] = 1;
            return;
        }
        
        hash[cloth[1]]++;
    });

    for(const item of Object.keys(hash)) {
        if(!answer) {
            answer = hash[item] + 1;
            continue;
        }

        answer *= (hash[item] + 1);
    }

    if(answer) {
        answer -= 1;
    }
    
    return answer;
}

/**
 * (A+1)(B+1)(C+1) - 1 의상의 종류가 A, B, C 3개일 때 총 조합의 수
 */

console.log(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]));
