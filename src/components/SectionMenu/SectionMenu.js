import React, { Fragment } from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import Heading from '../Heading';
import Badge from '../Badge';

const SectionMenu = () => {
    return (
        <Fragment>
            <section className="section-menu clearfix" id="menu">
                <Heading>Menu</Heading>
                <PDFReader url="./pdf/menu.pdf" showAllPage={true} />
                <div className="text-content">
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
