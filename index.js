//const testVar = {}

//function testFunc() {
  //return "hi"
//}

//const superbowlWin = record.map(function (record) {
  //return Object.assign({}, record, {
    
    //let result = record.find(record => record.result === "W")
    //return result ? result.year : undefined 
  //});

//console.log(superbowlWin)

superbowlWin = (record) => {
  const result = record.find( record => record.result === "W" )
  return result ? result.year : undefined
}


