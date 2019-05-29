// Score 20
var frames1 = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]

// Score 119
var frames2 = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4],
]

function scoreGame(frames) {
  var totalScore = 0

  for(var i = 0; i < frames.length; i++) {
    var frame = frames[i]
    var nextFrame = frames[i + 1]
    var ballOne = frame[0]
    var ballTwo = frame[1]
    
    if(isNotLastFrame(i, frames.length)) {
      var nextBallOne = nextFrame[0]
      var nextBallTwo = nextFrame[1]
    }

    var frameScore = scoreFrame(frame)

    if(isSpare(frameScore, ballOne)) {
      frameScore = scoreSpare(ballOne, ballTwo, nextBallOne)
    } else if (frameScore == 10) {
      frameScore = scoreStrike(nextBallOne, nextBallTwo)
    }
    
    console.log(i, frame, frameScore)
    totalScore += frameScore
  }

  return totalScore
}

function scoreFrame(frame) {
  return frame[0] + frame[1]
}

function isSpare(frameScore, ballOne) {
  return frameScore === 10 && ballOne !== 10
}

function scoreSpare(ballOne, ballTwo, nextBallOne) {
  return ballOne + ballTwo + nextBallOne
}

function scoreStrike(nextBallOne, nextBallTwo) {
  return 10 + nextBallOne + nextBallTwo
}

function isNotLastFrame(frameIndex, framesLength) {
  return frameIndex !== (framesLength - 1)
}

console.log('Score is: ', scoreGame(frames2))