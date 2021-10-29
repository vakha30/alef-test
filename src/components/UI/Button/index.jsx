import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import cl from "./button.module.css";

function Button({ children, onClick, addVariant, danger, arrow, disabled }) {
  return (
    <button
      className={classNames(cl.default, {
        [cl.addVariant]: addVariant,
        [cl.danger]: danger,
        [cl.arrow]: arrow,
        [cl.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  arrow: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  danger: false,
  arrow: false,
};

export default Button;
