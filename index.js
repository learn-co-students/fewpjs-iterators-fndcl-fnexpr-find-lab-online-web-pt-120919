const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  
  let win = arr.find( w => w.result === "W" )
  return !!win ? win.year : undefined

}
  