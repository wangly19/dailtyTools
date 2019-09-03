/**
 * 数组去重方案 1
 * @param {Array} arr 
 */
const uniq = (arr) => {
  return [...new Set(arr)]
  
}

/**
 * 数组去重方案 2
 * @param {Array} old_arr 
 */
const uniq2 = (old_arr) => {
  let arr = []
  for (let item of old_arr) {
     if(!arr.includes(item)) arr.push(item) 
  }
  return arr
}

console.log(uniq([1,2,3,3]))
// moudle.exports = uniq