const testVar = {}

function testFunc() {
  return "hi"
}
let recordReturn = record.find(rec => rec.result === "W")
if (recordReturn) {
  return recordReturn.year
}
