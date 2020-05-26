function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    const going_trucks = [];
    const goal_trucks = [];
    let current_weight = 0, goal_length = truck_weights.length;

    while(goal_length !== goal_trucks.length) {
        answer++;

        if(going_trucks.length > 0) {
            if(going_trucks[0][1] + 1 > bridge_length) {
                current_weight -= going_trucks[0][0];
                goal_trucks.push(going_trucks.shift());
            }
    
            for(const truck of going_trucks) {
                truck[1] += 1;
            }
        }

        if(truck_weights.length > 0) {
            if(weight >= current_weight + truck_weights[0]) {
                current_weight += truck_weights[0];
                going_trucks.push([truck_weights.shift(), 1]);
            }
        }
    }
    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));

/**
 * seconds++;
 * 
 * 1. goal_length === goal.trucks.length 확인 후 break;
 * 
 * 2. 기존에 있던 친구들 ++해주고
 * 
 * 3. going_trucks 중 빠져나간 차량 있는지 확인
 * if(going_trucks[0][1] > bridge_length) splice 해서 빼준다., current_weight - going_trucks[0]
 * 
 * if(weight >= current_weight + 들어오는 트럭)
 * {
 *  going_trucks.push([truck_weights, 지나간 초])
 * }
 * 
 * 
 */