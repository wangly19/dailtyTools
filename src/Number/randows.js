/**
 * 
 * @param {Number} minInt 
 * @param {Number} maxInt 
 */
const customRandom = (minInt , maxInt) =>{
  parseInt(Math.random() * (maxInt - minInt +1) + minInt)
}

module.exports.exports = customRandom