export const CHANGE_VALUE = 'CHANGE_VALUE';
export const RESGISTER_PARENT = 'RESGISTER_PARENT';
export const SAVE_PROFIL_PARENT = 'SAVE_PROFIL_PARENT';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const registerParent = () => ({
  type: RESGISTER_PARENT,
});

export const saveProfilParent = (
  firstname,
  lastname,
  phone,
  adress,
  zipcode,
  city,
) => ({
  type: SAVE_PROFIL_PARENT,
  firstname,
  lastname,
  phone,
  adress,
  zipcode,
  city,
});
