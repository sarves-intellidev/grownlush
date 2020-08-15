import React from 'react'
import logo from './gllogo.png';
import logo2 from './nameicon.png';
import logo3 from './login.png';
import logo4 from './signup.png';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <div className="total__header">
            <img className="name__icon" src={logo2} alt="" />
            <Link className="header__logo" to="/">
               <img className="header__logo2" src={logo} alt="" />
            </Link>
            <Link className="login__icon" to="/login">
               <img className="login__icon2" src={logo3} alt="" />
            </Link>
            <Link className="signup__icon" to="/signup">
               <img className="signup__icon2" src={logo4} alt="" />
            </Link>
            </div>
        </nav>
    );
}

export default Header
