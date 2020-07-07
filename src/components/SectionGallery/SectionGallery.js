import React from 'react';
import Heading from '../Heading';

const SectionGallery = () => {
    return (
        <section className="section-gallery clearfix" id="gallery">
            <Heading>Gallery</Heading>
            <div className="gallery-border">
                <div className="gallery-container"></div>
            </div>
        </section>
    );
};

export default SectionGallery;
