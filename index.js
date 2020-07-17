const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamData) {
  let result;
  teamData.find(team => {
    if (team["result"] === "W") {
      result = team.year;
    }
  })
  return result;
};
