const setCookie = (name , value , day) => {
  const date = new Date()
  date.setDate(date.getDate() + day)
  document.cookie = `${name}=${value};expires=${date}`
}

const getCookie = (name) =>{
  const arr = document.cookie.split(';')
  
}

const removeCookie = () => {
  
}