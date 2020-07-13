const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}

]

const superbowlWin = (arr) => {
  let year;
  arr.find(obj => {
    if (obj["result"] === "W") {
      year = obj.year;
    }
  })
  return year;
}

