import React from "react";
import {Link} from "react-router-dom";

import '../../styles/RemoveFromBasketInfo.css';

export const RemoveFromBasketInfo = () => (
    <div className="remove-basket-info-wrapper">
        <div className="remove-basket-info-container">
            <p>Produkt został usunięty z koszyka</p>
            <Link to="/start/products">Kontynuuj zakupy</Link>
            <Link to="/start/basket">Koszyk</Link>
        </div>
    </div>
);