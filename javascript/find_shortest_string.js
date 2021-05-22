function findShortestString(arr) {
  return arr.reduce((a,b) => a.length <= b.length ? a : b)

  // if (arr.length === 1) {
  //   return arr[0]
  // }
  // let recursive = findShortestString(arr.slice(1))
  // return arr[0].length <= recursive.length ? arr[0] : recursive
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  let times = []
  for (let i = 0; i < 1000; i++) {
    let t0 = Date.now()
    findShortestString(['flower', 'juniper', 'lily', 'dadelion'])
    let t1 = Date.now()
    times[i] = t1 - t0
  }
  console.log(times.reduce((a,b) => a + b, 0)/1000)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
