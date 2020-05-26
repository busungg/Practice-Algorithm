//조합
//숫자는 다르지만 모아두면 순서에 상관없이 같으니깐 동자 순열로 생각한다.
//밖에서 for문은 돌립니다.


/**
 * 1. boss를 정한다.
 * 2. 나머지를 for문 돌린다.
 * 3. 나머지 또 나머지를 for문 돌린다.
 * 4. 
*/

function combinationWithoutRepetitions(array, depth) {
    const result = [];
    function recursive(start, array, depth, result) {
        if(depth > array.length) return;

        if(depth === 0) {
            return result.push(start);
        }

        for(let i = 0; i < array.length; i) {
            recursive([...start, array.splice(i, 1)[0]], [...array], depth - 1, result);
        }
    }

    for(let i = 0; i < array.length; i) {
        recursive([array.splice(i, 1)[0]], [...array], depth - 1, result);
    }

    return result.filter((item)=> {
        return item.length === depth;
    });
}