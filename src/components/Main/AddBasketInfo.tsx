import React from "react";

import '../../styles/AddBasketInfo.css';
import {Link} from "react-router-dom";

export const AddBasketInfo = () => {
    return (
        <div className="add-basket-info-wrapper">
            <div className="add-basket-info-container">
                <p>Produkt został dodany do koszyka</p>
                <Link to="/start/products">Kontynuuj zakupy</Link>
                <Link to="/start/basket">Koszyk</Link>
            </div>
        </div>
    );
}