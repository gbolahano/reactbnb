const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
}

const setToken = (access_token, expires_in) => {
  const toke = {
    access_token,
    expires_in: parseInt(expires_in) + 7200
  }
  const token = JSON.stringify(toke);
  localStorage.setItem('token', token);
}

const config = (token = '') => {
  return  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export {
  getToken,
  setToken,
  config
}