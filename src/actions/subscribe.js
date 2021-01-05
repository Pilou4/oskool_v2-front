export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT';
export const SUBSCRIBE_SAVE_USER = 'SUBSCRIBE_SAVE_USER';
export const SAVE_REGISTER_RESPONSE = 'SAVE_REGISTER_RESPONSE';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const subscribeSubmit = () => ({
  type: SUBSCRIBE_SUBMIT,
});

export const subscribeSaveUser = (email, password) => ({
  type: SUBSCRIBE_SAVE_USER,
  email,
  password,
});

export const saveRegisterResponse = (value) => ({
  type: SAVE_REGISTER_RESPONSE,
  value,
});
