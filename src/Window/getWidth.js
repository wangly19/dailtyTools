/** 
 * 获取可视页面宽度
*/
const getWidth = () =>{
  const clinent_width = document.getElementById('root').clientWidth
  const offse_width = document.getElementById('root').offsetWidth
  return clinent_width || offse_width
}
module.exports = getWidth