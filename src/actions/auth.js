export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const FETCH_PROFIL_PARENT = 'FETCH_PROFIL_PARENT';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (id, roles) => ({
  type: SAVE_USER,
  id,
  roles,
});
export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
export const fetchProfilParent = (parent) => ({
  type: FETCH_PROFIL_PARENT,
  firstname: parent.firstname,
  lastname: parent.lastname,
  adress: parent.adress,
  zipcode: parent.zipcode,
  city: parent.city,
  phone: parent.phone,
});
