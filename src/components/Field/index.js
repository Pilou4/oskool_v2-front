import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({
  name,
  type,
  title,
  inputValue,
  setInputValue,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="field">
      <input
        className="field__input-text"
        id={name}
        type={type}
        placeholder={title}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;