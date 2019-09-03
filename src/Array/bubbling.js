/**
 * 
 * @param {Array} arr 
 */
const bubbling = (arr) =>{
  let new_arr = [].concat(arr)
  for (let i = 0 ; i < new_arr.length -1 ; i++){
    for (let j = 0 ; j < new_arr.length - i - 1 ; j++) {
      if (new_arr[j] > new_arr[j+1]) {
        const temp = new_arr[j]
        new_arr[j] = new_arr[j + 1]
        new_arr[j + 1] = temp
      }
    }
  }
  return new_arr
}

module.exports = bubbling