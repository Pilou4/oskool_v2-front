export const CHANGE_VALUE = 'CHANGE_VALUE';
export const REGISTER_CHILDREN = 'REGISTER_CHILDREN';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const registerChildren = () => ({
  type: REGISTER_CHILDREN,
});