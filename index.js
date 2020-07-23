const testVar = {}


function testFunc() {
  return "hi"
}

function superbowlWin(data){
  
let win =data.find(function(sport, index){ 
  if (sport.result === "W"){
    return true
  }
})
  if(Boolean(win)=== true)
  {return win.year}
 


}

