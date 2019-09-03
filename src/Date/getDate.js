/**
 * 时间模板字符串
 * @param {String} str 
 */
const getDate = (str,bool) =>{
  bool = bool || false
  const type = str.toLocaleLowerCase()
  const date = new Date()
  const year = date.getYear() + 1900
  const month = add(date.getMonth() + 1)
  const day = add(date.getDate())
  const hours = add(date.getHours())
  const min = add(date.getMinutes())
  const seconds = add(date.getSeconds())
  const result = type.replace(/yyyy/g,year).replace(/mm/g,month).replace(/dd/g,day)
  const result1 = type.replace(/yyyy/g,year).replace(/mm/g,month).replace(/dd/g,day)
  const time = ` ${hours}:${min}:${seconds}`
  return bool ? result + time : result
  function add (temp){
    return temp < 10 ? '0' + temp : temp
  }
}

// console.log(getDate('yyyy-mm-dd',true))
module.exports = getDate