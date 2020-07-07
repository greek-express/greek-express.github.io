import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import Heading from '../Heading';

const SectionMenu = () => {
    return (
        <section className="section-menu clearfix" id="menu">
            <Heading>Menu</Heading>
            Click{' '}
            <a href="./pdf/menu.pdf" target="blank">
                here
            </a>{' '}
            to download
            <PDFReader url="./pdf/menu.pdf" showAllPage={true} />
        </section>
    );
};

export default SectionMenu;
