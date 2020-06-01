//순열
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
            recursive(copyNumbers, [...subResult, afterNum], result);
        }
    }

    const result = new Set();
    let firstNum, copyNumbers;
    for(let i = 0, len = numbers.length; i< len; i++) {
        firstNum = numbers[i];
        result.add(firstNum);

        copyNumbers = [...numbers];
        copyNumbers.splice(i, 1);
        recursive(copyNumbers, [firstNum], result);
    }

    return result;
};