import History from './history';

const AuthToken = 'jwt';

export const Login = (token) => {
  localStorage.setItem(AuthToken, token);
  History.push('/dashboard');
}
export const Logout = () => {
  localStorage.removeItem(AuthToken);
   History.push('/login');
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