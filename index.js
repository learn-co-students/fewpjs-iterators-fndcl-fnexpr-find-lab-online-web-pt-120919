const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objs) {
  let result = objs.find( obj => obj.result === 'W');
  return result ? result.year : undefined;
}