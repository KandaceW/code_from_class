function printSomething(func) {
  console.log(func())
}

function getSomething() {
  return 'something'
}

module.exports = {
  printSomething: printSomething,
  getSomething: getSomething,
}
