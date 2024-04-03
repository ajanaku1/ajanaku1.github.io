import { useState } from "react";
import logo from "../assets/favicon-16x16.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <a href="#home">
        <img src={logo} alt="my logo" className="logo" size={25} />
      </a>

      <nav className="nav-bar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>

        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <i
              className={
                isDropdownOpen ? "bx_header bx bx-x" : "bx_header bx bx-menu"
              }
            ></i>
          </button>
          <div className={isDropdownOpen ? "show" : "dropdown-content"}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
