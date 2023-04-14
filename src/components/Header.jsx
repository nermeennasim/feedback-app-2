import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  //use variable for styling
  const HeaderStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
//define by default text
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
//specify type of properties or arguments restrict
Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
