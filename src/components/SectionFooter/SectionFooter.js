import React from 'react';

const SectionFooter = () => {
    return (
        <section className="section-footer">
            <div className="footer-container">
                <div className="text-content" style={{ color: '#dcdcdc' }}>
                    <a
                        href="mailto:business.greek.express@gmail.com"
                        className="email"
                    >
                        business.greek.express@gmail.com
                    </a>
                </div>
                <div className="text-content" style={{ color: '#dcdcdc' }}>
                    <a href="tel:+1-425-747-7434" className="phone">
                        (425)-747-7434
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SectionFooter;
