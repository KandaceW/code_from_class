var fs = require('fs')

function doSomething() {
  console.log('called')
}

function callFunction(callback) {
  callback()
}

function printFile(err, data) {
  if (err) throw(err)
  console.log(data)
}

console.log('hi')
callFunction(doSomething) //not async, note doSomething has no () because we aren't calling i
fs.writeFile('./blah.txt', 'more stuff', 'utf8',  function(err) { //async because fs.writeFile is an async function
  fs.readFile('./blah.txt', 'utf8', printFile)
})
console.log('bye')
