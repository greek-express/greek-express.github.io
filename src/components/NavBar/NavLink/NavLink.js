import React from 'react';

const NavLink = (props) => {
    return (
        <div>
            <h3 className="nav-link">{props.children}</h3>
        </div>
    );
};

export default NavLink;
