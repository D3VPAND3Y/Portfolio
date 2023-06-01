import  { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { openMenu, closeMenu } from "../animations";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }

  }, [menuOpen]);



 const menuToggle = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1500);
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
    <div className="header">
       <div className={`logo header-item`}>
        <Link to="/">
          <h2 id = "logo">Dev<span className="dev"> Pandey</span></h2>
        </Link>
      </div>
      <div
        onClick={menuToggle}
        className={`hamburger${menuOpen ? "__active" : ""} ${
          disabled ? "ham-disabled" : ""
        } header-item`}
      >
        <div className="hamburger-icon"></div>
      </div>
    </div>
    </Fragment>
  );
};

export default (Header);