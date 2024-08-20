import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, className, style, disabled }) => {
  return (
    <button
      className="flex items-center justify-center px-4 py-1 mt-4 text-xl font-semibold transition-transform duration-300 ease-in-out transform border-4 rounded-full border-accent-1 dark:border-accent-2 bg-accent-high-contrast-1 dark:bg-accent-high-contrast-2 bg-opacity-80 dark:bg-opacity-80 text-content-main-text-2 dark:text-content-main-text-2 hover:bg-accent-low-contrast-1 dark:hover:bg-accent-low-contrast-2 hover:text-content-main-text-1 dark:hover:text-content-main-text-1 hover:scale-105 hover:shadow-lg"
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  style: {},
  disabled: false,
};

export default Button;
