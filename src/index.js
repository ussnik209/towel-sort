
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return []
  let arr = []
  matrix.forEach(element => {
    arr.push(...element)
  });
  return arr
}
