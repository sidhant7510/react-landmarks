import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/Octicons-location.svg"
        className="logo"
        alt="logo"
      />
      <h6>LAND</h6>
    </nav>
  );
};

export default Navbar;
