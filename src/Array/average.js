/**
 * 数组平均数
 * @param {Array} arr 
 */
const average = (arr) => {
  let sum = 0
  for (let i of arr) sum += i
  return sum / arr.length
}

module.exports = average