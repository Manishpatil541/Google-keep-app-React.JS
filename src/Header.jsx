import React from 'react';
import logo from "./Images/logo.jfif";

const Header = () => {
  return (
  <>
    <div className="header">
        <img src={logo} alt="logo" width="90" height="90" />
        <h1> Google Keep</h1>
    </div>
  </>
    );
};

export default Header;
