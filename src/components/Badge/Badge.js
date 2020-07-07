import React from 'react';

const renderBadge = (type) => {
    switch (type) {
        case 'doordash':
            return (
                <a
                    href="https:// www.doordash.com/store/greek-express-bellevue-651424/"
                    target="blank"
                >
                    <img
                        src="/img/UNOFFICIAL-Website-Badge-Doordash.png"
                        alt="DoorDash"
                    />
                </a>
            );
        case 'grubhub':
            return (
                <a
                    href="https:// www.doordash.com/store/greek-express-bellevue-651424/"
                    target="blank"
                >
                    <img src="/img/Website-Badge-GH.png" alt="GrubHub" />
                </a>
            );
        case 'ubereats':
            return (
                <a
                    href="https://www.ubereats.com/seattle/food-delivery/greek-express/YZmxK7xvQJKNXAJkBybC6g"
                    target="blank"
                >
                    <img src="/img/Website-Badge-UberEats.png" alt="UberEats" />
                </a>
            );
        case 'caviar':
            return (
                <a
                    href="https://www.trycaviar.com/m/greek-express--factoria-11272"
                    target="blank"
                >
                    <img src="/img/Website-Badge-Caviar.png" alt="Caviar" />
                </a>
            );
        default:
            return ' ';
    }
};

const Badge = (props) => {
    return <div className="badge">{renderBadge(props.type)}</div>;
};

export default Badge;
