function solution(participant, completion) {
    var hashPart = {};
    var idx = 1;
    for(var i = 0; i < participant.length; i++) {
        if(hashPart[participant[i]]) {
            hashPart[participant[i]] = ++hashPart[participant[i]];
            continue;
        }
        hashPart[participant[i]] = 1;
    }
    
    var cm = null;
    for(i = 0; i < completion.length; i++) {
        cm = completion[i];
        if(hashPart[cm]) {
            hashPart[cm] = --hashPart[cm];
        }
    }
    
    var answer = null;
    for(var key in hashPart) {
        if(hashPart[key] == 1) {
            answer = key;
            break;
        }
    }
    return answer;
}