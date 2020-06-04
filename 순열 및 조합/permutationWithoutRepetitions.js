//순열
//depth 없는 것
const permutation1 = (numbers) => {
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
            recursive(copyNumbers, [...subResult, afterNum], result);
        }
    }

    const result = new Set();
    let firstNum, copyNumbers;
    for(let i = 0, len = numbers.length; i< len; i++) {
        firstNum = numbers[i];

        copyNumbers = [...numbers];
        copyNumbers.splice(i, 1);
        recursive(copyNumbers, [firstNum], result);
    }

    return result;
};

//with Depth
const permutation2 = (numbers, depth) => {
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