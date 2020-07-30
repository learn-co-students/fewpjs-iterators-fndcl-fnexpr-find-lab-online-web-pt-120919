const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(collection) {
  let result = collection.find( data => data.result === "W" )
  return !!result ? result.year : undefined
}