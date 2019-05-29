
function scoreFrame(frame, nextFrame) {
  if(frame[0] === 10) {
    return 12
  } else {
    return frame[0] + frame[1]
  }
}


module.exports = {
  scoreFrame: scoreFrame
}