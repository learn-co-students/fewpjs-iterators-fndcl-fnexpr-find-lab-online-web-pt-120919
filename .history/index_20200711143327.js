const testVar = {}

function testFunc() {
  return "hi"
}
let recordReturn = record.find(rec => rec.result === "W")
if (recordReturn) {
  console.log(recordReturn.year)
}
