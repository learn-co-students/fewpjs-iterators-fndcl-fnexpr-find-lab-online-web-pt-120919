const testVar = {}

function testFunc() {
  return console.log("hi")
}

function superbowlWin(record){
    let result = record.find( record => record.result === "W")
    return result ? result.year : undefined
}

// Alternate Solution

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }