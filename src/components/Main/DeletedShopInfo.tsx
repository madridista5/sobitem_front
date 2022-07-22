import React, {useContext, useEffect} from "react";
import {IdContext} from "../../contexts/id.context";
import {apiUrl} from "../../config/api";

import '../../styles/DeletedShopInfo.css';

export const DeletedShopInfo = () => {
    const {id} = useContext(IdContext);

    useEffect(() => {
        (async () => {
            await fetch(`${apiUrl}/shop/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
        })();
    }, []);

    return (
        <div className="confirm-delete-shop-wrapper">
            <div className="confirm-delete-shop-content">
                <h2>Sklep został usunięty.</h2>
            </div>
        </div>
    );
}