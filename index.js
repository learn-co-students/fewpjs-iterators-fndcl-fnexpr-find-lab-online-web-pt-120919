const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(superbowls){
  let result = superbowls.find(wins => { return wins.result == "W"})
  return result ? result.year : undefined
}