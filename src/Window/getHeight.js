/** 
 * 获取可视页面高度
*/
const getHeight = () => {
  const client_height = document.getElementById('root').clientHeight
  const offse_height = document.getElementById('root').offsetHeight
  return client_height || offse_height
}
module.exports = getHeight