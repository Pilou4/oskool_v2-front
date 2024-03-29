import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
