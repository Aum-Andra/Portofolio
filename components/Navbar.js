import logo from "./img/logo/wlnb.svg";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  let IsDesktopOrPhone = useMediaQuery("(max-width:800px)");

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} height="80px" width="80px"></Image>
      </div>

      {(menu === true || IsDesktopOrPhone === false) && (
        <div className="links">
          <a onClick={() => setMenu(false)} href="#about">
            About
          </a>
          <a onClick={() => setMenu(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setMenu(false)} href="#contact">
            Contact
          </a>
          <a onClick={() => setMenu(false)} href="#">
            Resume
          </a>
        </div>
      )}
      <button onClick={() => handleClick()} className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
