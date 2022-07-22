import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../contexts/login.context";
import {NotLogin} from "./NotLogin";

import '../../styles/AddBasketInfo.css';

export const AddBasketInfo = () => {
    const {login} = useContext(LoginContext);

    return (
        <>
            {login ?
                <div className="add-basket-info-wrapper">
                    <div className="add-basket-info-container">
                        <p>Produkt został dodany do koszyka</p>
                        <Link to="/start/products">Kontynuuj zakupy</Link>
                        <Link to="/start/basket">Koszyk</Link>
                    </div>
                </div>
            : <NotLogin info="Aby dodawać przedmioty do koszyka musisz być zalogowany."/>}
        </>
    )
}