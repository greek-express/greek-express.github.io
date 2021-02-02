import React from 'react';

const renderBadge = (type) => {
    switch (type) {
        case 'doordash':
            return (
                <a
                    href="https://www.doordash.com/store/greek-express-bellevue-651424/"
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
                    href="https://www.grubhub.com/restaurant/greek-express-4058-factoria-square-mall-se-ste-h2-bellevue/1008618"
                    target="blank"
                >
                    <img src="/img/Website-Badge-GH.png" alt="GrubHub" />
                </a>
            );
        case 'ubereats':
            return (
                <a
                    href="https://order.ubereats.com/seattle/food-delivery/greek-express/YZmxK7xvQJKNXAJkBybC6g"
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
        case 'clover':
            return (
                <a
                    href="https://www.clover.com/online-ordering/greek-express-bellevue"
                    target="blank"
                >
                    <img src="/img/Website-Badge-Clover.png" alt="Clover" />
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
