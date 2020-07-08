import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavLink = (props) => {
    return (
        <div className="nav-link-container">
            <h3 className="nav-link">
                <AnchorLink href={`#${props.target}`}>
                    {props.children}
                    <div className="nav-link-border flip-in-hor-bottom"></div>
                </AnchorLink>
            </h3>
        </div>
    );
};

export default NavLink;
