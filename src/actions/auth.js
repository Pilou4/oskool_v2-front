export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const FETCH_PROFIL_PARENT = 'FETCH_PROFIL_PARENT';
export const CHECK_IS_LOGGED_PARENT = 'CHECK_IS_LOGGED_PARENT';
export const FETCH_PROFIL_CHILDREN = 'FETCH_PROFIL_CHILDREN';

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
export const fetchProfilParent = (dataUser) => ({
  type: FETCH_PROFIL_PARENT,
  firstname: dataUser.parent.firstname,
  lastname: dataUser.parent.lastname,
  adress: dataUser.parent.adress,
  zipcode: dataUser.parent.zipcode,
  city: dataUser.parent.city,
  phone: dataUser.parent.phone,
  email: dataUser.email,
});

export const fetchProfilChildren = (students) => ({
  type: FETCH_PROFIL_CHILDREN,
  firstname: students.firstname,
  lastname: students.lastname,
  age: students.age,
  birthday: students.birthday,
  health: students.health,
  hobbies: students.hobbies,
  level: students.level,
});

export const checkIsLoggedParent = (id) => ({
  type: CHECK_IS_LOGGED_PARENT,
  id,
});
