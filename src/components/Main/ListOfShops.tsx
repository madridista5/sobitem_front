import React, {useContext, useEffect, useState} from "react";
import {ShopEntity} from 'types';

import '../../styles/ListOfShops.css';
import {apiUrl} from "../../config/api";
import {Link} from "react-router-dom";
import {IdContext} from "../../contexts/id.context";

export const ListOfShops = () => {
    const [shops, setShops] = useState<ShopEntity[]>([]);
    const {setId} = useContext(IdContext);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/allShops`);
            const data = await res.json();
            setShops(data);
        })();
    }, []);

    return (
        <div className="list-of-shops-wrapper">
            <ul>
                {
                    shops.map(shop => (<li key={shop.id} className="li-test">
                        <p>{shop.name}</p>
                        <p>Kategoria: {shop.category}</p>
                        {shop.url && <p>Adres url: <a href={shop.url}>{shop.url}</a></p>}
                        <Link to="/start/singleShopView" className="link-show-products" onClick={() => setId(shop.id)}>Zobacz produkty</Link>
                    </li>))
                }
            </ul>
        </div>
    );
}