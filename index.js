const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let foundObj = array.find(obj => obj.result === "W")
  if (!!foundObj) {
    return foundObj.year
  }
}