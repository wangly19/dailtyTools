function urlSplic(url , params) {
  let SPLICURL = url+'?'
  for (let key in params){
    SPLICURL = SPLICURL+key+'='+params[key]+'&'
  }
  SPLICURL = SPLICURL.substring(0,SPLICURL.length-1)
  return SPLICURL
}
moudle.exports = urlSplic