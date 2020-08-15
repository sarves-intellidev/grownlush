import React from 'react'
import './Header2.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header__2">
            <div className="total__header">
                <div className="header__nav">
                    <Link className="header__link">
                     <div className="header__option">
                      <p className="header__optionlineone">Home</p>
                     </div>
                    </Link>

                    <Link className="header__link" to="/store">
                     <div className="header__option">
                      <p className="header__optionlineone">Our Store</p>
                     </div>
                    </Link>

                    <Link className="header__link">
                     <div className="header__option">
                      <p className="header__optionlineone">Our Community</p>
                     </div>
                    </Link>

                    <Link className="header__link">
                     <div className="header__option">
                      <p className="header__optionlineone">The Vision</p>
                     </div>
                    </Link>

                    <Link className="header__link">
                     <div className="header__option">
                      <p className="header__optionlineone">About Us</p>
                     </div>
                    </Link>
                </div>
            <input type="text" className="header2__search" placeholder="Search Items...">
                </input>
                <Link className="search__icon__circle" to="/store">
                <div className="search__icon__circle2">
                   <div className="search__icon__go">
                      Go
                   </div>
                </div>
                </Link>
            </div>
            
        </nav>
    );
}

export default Header
