import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  return (
    <div className="field">
      <label
        className="field__label" 
      >
        {placeholder}
      </label>
      <input
        // base infos
        className="field__input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        // react -state
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
