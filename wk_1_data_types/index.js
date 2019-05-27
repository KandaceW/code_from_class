// Data types
// First class functions
// CommonJS imports

var myFunctions = require('./utils/functions')

// console.log(myFunctions)

var types = {
  n: 5,
  b: true,
  s: 'this is a string',
  o: { key: 'value' },
  a: [1, 2, 3, 4, 5],
  u: undefined,
  nan: NaN,
  nu: null,
  f: function () {
    console.log('I am a function')
  },
}

// var obj = {
//   cat: 'Tom',
//   mouse: 'Jerry',
//   bird: 'Tweetie',
// }

// obj['bird']
// obj.bird

// var array = [
//   'Tom',
//   'Tweetie',
//   'Jerry',
// ]

// var arrayObj = {
//   1: 'Jerry',
//   0: 'Tom',
//   2: 'Tweetie',
// }

// array[1]


// console.log('n is number?', typeof types.n)
// console.log('b is boolean?', typeof types.b)
// console.log('s is string?', typeof types.s)
// console.log('o is object?', typeof types.o)
// console.log('a is array?', typeof types.a)
// console.log('u is object?', typeof types.u)
// console.log('nan is number?', typeof types.nan)
// console.log('nu is number?', typeof types.nu)
// console.log('f is object?', typeof types.f)

// printSomething(getSomething)
// doSomething()



// var doSomething = function() {
//   console.log('sure')
// }

myFunctions.printSomething(myFunctions.getSomething)

// var arr = 'string'
// console.log(arr[0])
