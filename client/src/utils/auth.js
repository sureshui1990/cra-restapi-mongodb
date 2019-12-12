const AuthToken = 'jwt';

export const Login = () => {
  localStorage.setItem(AuthToken, 'test@123');
}

export const Logout = () => {
  localStorage.removeItem(AuthToken);
}

export const isLogin = () => {
  if(localStorage.getItem(AuthToken)){
    return true;
  }
  return false;
}