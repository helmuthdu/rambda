const curry = require('./internal/curry')
const equals = require('./equals')

function contains (val, arr) {
  let index = -1
  let flag = false
  while (++index < arr.length && !flag) {
    if (equals(arr[ index ], val)) {
      flag = true
    }
  }

  return flag
}

module.exports = curry(contains)
