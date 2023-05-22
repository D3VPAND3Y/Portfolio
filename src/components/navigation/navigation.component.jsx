import { Outlet,Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
// import { Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation =() =>{
    return (
        <Fragment>
        <div className="navigation">

        <Link className="logo-container" to="/">
        <h1 className="logo">Logo</h1>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="shop">Shop</Link>
        {/* <Link className="nav-link" to="about">About</Link> */}
        <Link className="nav-link" to="contact">Contact</Link>
        <Link className="nav-link" to="auth">Sign In</Link>
        </div>
        </div>
        <Outlet />
        </Fragment>

    );
}

export default Navigation;