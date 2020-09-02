function solution(record) {
  var answer = [];

  var commandLogs = [],
    userLogs = {};

  for (var item of record) {
    var [command, id, lastNickname] = item.split(" ");
    if (command !== "Change") {
      commandLogs.push({ command, id });
    }

    if (id && lastNickname) {
      userLogs[id] = lastNickname;
    }
  }

  for (var log of commandLogs) {
    answer.push(getMessage(userLogs[log.id], log.command));
  }

  return answer;
}

function getMessage(nickName, command) {
  var suffix;

  switch (command) {
    case "Enter":
      suffix = "님이 들어왔습니다.";
      break;
    case "Leave":
      suffix = "님이 나갔습니다.";
      break;
  }

  return `${nickName}${suffix}`;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Enter uid1234",
  ])
);
