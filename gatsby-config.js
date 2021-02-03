require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GA_TRACKING_ID,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`poppins`],
                display: 'swap',
            },
        },
    ],
};
