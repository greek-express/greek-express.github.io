import React, { Fragment } from 'react';
// import SimpleImageSlider from 'react-simple-image-slider';
import Swiper from 'react-id-swiper';

const images = [
    'img/gallery/IMG_0475.jpg',
    'img/gallery/IMG_0475.jpg',
    'img/gallery/IMG_0475.jpg',
    'img/gallery/IMG_0475.jpg',
];

const Gallery = () => {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    return (
        <Fragment>
            {/*
            <SimpleImageSlider
                width={640}
                height={640}
                images={images}
                navStyle={2}
                slideDuration={0.5}
            />
            */}

            <Swiper {...params}>
                {images.map((e, i) => {
                    return (
                        <div key={i}>
                            <img
                                src={e}
                                alt="Greek Express food"
                                style={{ width: '100%' }}
                            />
                        </div>
                    );
                })}
            </Swiper>
        </Fragment>
    );
};

export default Gallery;
