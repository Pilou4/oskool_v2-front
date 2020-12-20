// input login
export const CHANGE_VALUE = 'CHANGE_VALUE';
// bouton login
export const USER_LOGIN = 'USER_LOGIN';

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const userLogin = (isLogged) => ({
  type: USER_LOGIN,
  isLogged,
});
