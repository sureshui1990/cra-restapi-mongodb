const AuthToken = 'jwt';

export const Login = (token) => {
  localStorage.setItem(AuthToken, token);
}
export const Logout = () => {
  localStorage.removeItem(AuthToken);
}
export const getAuthToken = () => {
   return localStorage.getItem(AuthToken);
}

export const isLogin = () => {
  if(localStorage.getItem(AuthToken)){
    return true;
  }
  return false;
}