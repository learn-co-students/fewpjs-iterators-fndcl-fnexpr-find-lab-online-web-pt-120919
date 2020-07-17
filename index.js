const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(someArray) {
  let result = someArray.find( someArray => someArray.result === "W" )
  return !!result ? result.year : undefined
}
