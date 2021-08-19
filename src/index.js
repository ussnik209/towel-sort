
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return []
  let arr = []
  for (let i = 0, len = matrix.length; i < len; i++) {
    let el = matrix[i]
    if(i % 2) el.reverse()
    arr.push(...el)
  }
  return arr
}
