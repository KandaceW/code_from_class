var game = require('../game')

test('check its working', function() {
  expect(1).toBeLessThan(2)
})

test('score a gutterball frame', function() {
  var frame = [0,0]
  var expected = 0

  var actual = game.scoreFrame(frame)

  expect(actual).toEqual(expected)
})

test('score a simple frame', function() {
  var frame = [0,1]
  var expected = 1

  var actual = game.scoreFrame(frame)

  expect(actual).toEqual(expected)
})

test('score a simple frame', function() {
  var frame = [1,0]
  var expected = 1

  var actual = game.scoreFrame(frame)

  expect(actual).toEqual(expected)
})

test('score a simple frame', function() {
  var frame = [7,2]
  var expected = 9

  var actual = game.scoreFrame(frame)

  expect(actual).toEqual(expected)
})

test('score a strike', function() {
  var frame = [10,0]
  var nextFrame = [1,1]
  var expected = 12

  var actual = game.scoreFrame(frame, nextFrame)

  expect(actual).toEqual(expected)
})

test('score a strike', function() {
  var frame = [10,0]
  var nextFrame = [1,1]
  var expected = 12

  var actual = game.scoreFrame(frame, nextFrame)

  expect(actual).toEqual(expected)
})