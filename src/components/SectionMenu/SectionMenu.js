import React, { Fragment } from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import Heading from '../Heading';
import Badge from '../Badge';

const SectionMenu = () => {
    return (
        <Fragment>
            <section className="section-menu clearfix" id="menu">
                <Heading>Menu</Heading>
                Click{' '}
                <a
                    href="./pdf/menu.pdf"
                    target="blank"
                    style={{ textDecoration: 'underline' }}
                >
                    here
                </a>{' '}
                to download
                <PDFReader url="./pdf/menu.pdf" showAllPage={true} />
            </section>
            <section className="section-delivery clearfix" id="delivery">
                <div className="text-content u-margin-top-medium u-margin-bottom-small">
                    Have our food delivered to you using one of our partners!
                </div>
                <div className="badges u-margin-bottom-small">
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
