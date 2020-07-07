import React from 'react';
import Heading from '../Heading';
import Gallery from '../Gallery';

const SectionGallery = () => {
    return (
        <section className="section-gallery clearfix" id="gallery">
            <Heading>Gallery</Heading>
            <div className="gallery-border">
                <div className="gallery-container">
                    <Gallery />
                </div>
            </div>
        </section>
    );
};

export default SectionGallery;
