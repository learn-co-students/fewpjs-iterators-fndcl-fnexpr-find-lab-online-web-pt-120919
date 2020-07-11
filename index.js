
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) {
  let x = record.find(function(rec) {
    return rec.result  == "W";
  })
  if (x !== undefined){
      return x.year
  }
}

