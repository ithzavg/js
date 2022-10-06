let totalPoints = 0;
const matches = ["2:1", "3:2", "2:2", "2:3"];
const totalTeamPoints = (matches) => {
  for (let i = 0; i < matches.length; i++) {
    let result = matches[i].split(":");
    if (result[0] <= 4 || result[1] <= 4) {
      if (result[0] > result[1]) totalPoints += 3;
      if (result[0] < result[1]) totalPoints += 1;
    } else {
      return `This match is not in the range ${matches[i]} and total points: ${totalPoints}`
    }
  }
  return "Total points: " + totalPoints;
};

console.log(totalTeamPoints(matches));
