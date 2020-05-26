solution([93, 30, 55], [1, 30, 5]);

function solution(progresses, speeds) {
    var answer = [];
    var workDay = [];

    var remainDay = 0;
    for(var i = 0; i < progresses.length; i++) {
        remainDay = 100 - progresses[i];
        workDay[i] = Math.ceil(remainDay / speeds[i]);
    }
    
    var standardWork = null;
    var answerIdx = 0;
    for(i = 0; i < workDay.length; i++) {
        if(!standardWork) {
            standardWork = workDay[i];
            answerIdx = 0;
            answer[answerIdx] = 1;
            continue;
        }

        if(standardWork >= workDay[i]) {
            answer[answerIdx]++;
        } else {
            answerIdx++;
            answer[answerIdx] = 1;
            standardWork = workDay[i]; 
        }
    }
    
    return answer;
}