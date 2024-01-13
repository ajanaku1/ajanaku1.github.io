import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#home">AD.</a>
      </div>
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
