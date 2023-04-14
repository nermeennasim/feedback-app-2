import React from "react";
import PropTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version} `} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

//defining prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
