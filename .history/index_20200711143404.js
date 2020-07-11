const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr) {
  let recordReturn = arr.find(rec => rec.result === "W")
  if (recordReturn) {
    console.log(recordReturn.year)
  }
}
