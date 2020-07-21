import React, { Fragment } from 'react';

import NavLink from './NavLink';
import Logo from '../Logo';
import Border from '../Border';

// Navbar will display it's elements differently depending on the class
// Class name will change depending on the size of the screen
// Hamburger appears on small screens
// When clicking the hamburger the logo will disappear and the navlinks will reappear
// On scroll the Logo will also disappear using 'nth-child(3)'
const NavBar = () => {
    return (
        <Fragment>
            <div className="topbar">
                <Border set="left" />
                <nav>
                    <div className="navbar">
                        <NavLink target="menu">Menu</NavLink>
                        <NavLink target="delivery">Delivery</NavLink>
                        <Logo />
                        <NavLink target="gallery">Gallery</NavLink>
                        <NavLink target="about">About</NavLink>
                    </div>
                    <div className="hamburger inactive"></div>
                </nav>
                <Border set="right" />
            </div>
            <div className="topbar-sticky">
                <nav>
                    <div className="navbar-sticky">
                        <NavLink target="menu">Menu</NavLink>
                        <NavLink target="delivery">Delivery</NavLink>
                        <NavLink target="gallery">Gallery</NavLink>
                        <NavLink target="about">About</NavLink>
                    </div>
                </nav>
            </div>
            <div className="mobile-menu">
                <div className="mobile-nav-link">
                    <h4>Menu</h4>
                </div>
                <div className="mobile-nav-link">
                    <h4>Delivery</h4>
                </div>
                <div className="mobile-nav-link">
                    <h4>Gallery</h4>
                </div>
                <div className="mobile-nav-link">
                    <h4>About</h4>
                </div>
            </div>
        </Fragment>
    );
};

export default NavBar;
