function solution(jobs) {
    var answer = 0;
    
    /*
        1. jobs[][]에 있는 작업들은 요청시간 순으로 정렬되어 있지 않음
        2. 같은 요청시간을 갖는 작업들이 2개 이상 존재할 수 있음 
    */
    jobs.sort((a, b) => {
        if(!(a[0] - b[0])) {
            return a[1] - b[1];
        }

        return a[0] - b[0];
    });

    let jobsLength = jobs.length;
    let schedule = [], seconds = 0, next = 0;
    while(jobs.length !== 0 || schedule.length !== 0) {
        while (jobs.length > 0 && jobs[0][0] <= seconds) {
            //schedule이 없는 경우에는 시작 시간과 job의 요청 시간이 같다.
            if(schedule.length === 0) {
                next = seconds + jobs[0][1];
            }

            schedule.push(jobs.shift());
        }

        if(next === seconds) {
            if(schedule.length > 0) {
                answer += (next - schedule.shift()[0]);
            }

            if(schedule.length > 0) {
                schedule = schedule.sort((a, b) => {
                    return a[1] - b[1];
                });
                
                next += schedule[0][1];
            }
        }

        seconds++;
    }

    return Math.floor(answer / jobsLength);
}

console.log(solution([[0,3], [4,3], [10,3]]), 3);
console.log(solution([[0,10], [2,3], [9,3]]), 9);
console.log(solution([[1,10], [3,3], [10,3]]), 9);
console.log(solution([[0,10]]), 10);
console.log(solution([[0,10],[4,10],[5,11],[15,2]]), 15);