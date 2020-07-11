const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr) {
  let recordReturn = arr.find(rec => rec.result === "W")
  if (recordReturn) {
    return recordReturn.year
  }
}
