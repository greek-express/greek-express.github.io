import React from 'react';

const NavLink = (props) => {
    return (
        <div className="nav-link-container">
            <h3 className="nav-link">
                {props.children}
                <div className="nav-link-border flip-in-hor-bottom"></div>
            </h3>
        </div>
    );
};

export default NavLink;
