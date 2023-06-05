import  { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { openMenu, closeMenu } from "../../animations";
import "./Header.scss";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disabled] = useState(false);



  const menuToggle = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      openMenu();
      console.log("open");
    } else {
      setMenuOpen(false);
      closeMenu();
      console.log("close");
    }
  };

  //close menu when a Navlink is clicked
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
        closeMenu();
      });
    });
  }, []);

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