function solution(genres, plays) {
    var answer = [];

    //하면서 바로 정렬하면 된다.
    const hash = {};
    let orderedKeys, hashArray;
    for(let i = 0; i < genres.length; i++) {
        hashArray = hash[genres[i]];
        if(!hashArray) {
            hashArray = hash[genres[i]] = {total: 0, array: []};
            hashArray.total = 0;
        }

        hashArray.total += plays[i];
        hashArray.array.push([plays[i], i]);

        orderedKeys = Object.keys(hash).sort((a, b)=>{
            return hash[b].total - hash[a].total;
        });

        hashArray.array.sort((a, b) => {
            if(b[0] - a[0] == 0) {
                return a[1] - b[1];
            }

            return b[0] - a[0];
        });
    }

    for(item of orderedKeys) {
        answer.push(hash[item].array.shift()[1]);
        if(hash[item].array.length != 0) {
            answer.push(hash[item].array.shift()[1]);
        }
    }
    
    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));