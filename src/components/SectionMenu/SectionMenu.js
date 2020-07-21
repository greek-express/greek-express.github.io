import React, { Fragment } from 'react';
import Heading from '../Heading';
import Badge from '../Badge';

const SectionMenu = () => {
    return (
        <Fragment>
            <section className="section-menu clearfix" id="menu">
                <Heading>Menu</Heading>
                <a
                    href="./pdf/menu.pdf"
                    target="blank"
                    style={{ textDecoration: 'underline' }}
                    className="menu-button"
                >
                    <div className="button text-content u-margin-bottom-small">
                        View pdf
                    </div>
                </a>
                <div className="menu-frame">
                    <a
                        href="./pdf/menu.pdf"
                        target="blank"
                        style={{ textDecoration: 'underline' }}
                        className="menu-button"
                    >
                        <img
                            src="./img/menu-1.jpg"
                            alt="Menu page 1"
                            className="menu-image"
                        />
                        <img
                            src="./img/menu-2.jpg"
                            alt="Menu page 2"
                            className="menu-image"
                        />
                    </a>
                </div>
                <div className="menu-link text-content">
                    Click{' '}
                    <a
                        href="./pdf/menu.pdf"
                        target="blank"
                        style={{ textDecoration: 'underline' }}
                    >
                        here
                    </a>{' '}
                    to download
                </div>
            </section>
            <section className="section-delivery clearfix" id="delivery">
                <div className="floral-divider u-margin-top-medium"></div>
                <div className="text-content u-margin-top-medium u-margin-bottom-small">
                    Have our food delivered to you using one of our partners!
                </div>
                <div className="badges u-margin-bottom-medium">
                    <Badge type="doordash" />
                    <Badge type="grubhub" />
                    <Badge type="ubereats" />
                    <Badge type="caviar" />
                </div>
            </section>
        </Fragment>
    );
};

export default SectionMenu;
