import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
    { url: 'img/gallery/IMG_0475.jpg' },
    { url: 'img/gallery/IMG_0475.jpg' },
    { url: 'img/gallery/IMG_0475.jpg' },
    { url: 'img/gallery/IMG_0475.jpg' },
];

const Gallery = () => {
    return (
        <div>
            <SimpleImageSlider
                width={640}
                height={640}
                images={images}
                navStyle={2}
                slideDuration={0.5}
            />
        </div>
    );
};

export default Gallery;
