import React, {useContext, useEffect, useState} from "react";
import {ShopEntity} from 'types';
import {apiUrl} from "../../config/api";
import {Link} from "react-router-dom";
import {IdContext} from "../../contexts/id.context";

import '../../styles/ListOfShops.css';

export const ListOfShops = () => {
    const [shops, setShops] = useState<ShopEntity[]>([]);
    const {setId} = useContext(IdContext);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/allShops`, {
                credentials: 'include',
            });
            const data: ShopEntity[] = await res.json();
            setShops(data);
        })();
    }, []);

    return (
        <div className="list-of-shops-wrapper">
            <div className="list-of-shops-content">
                <table className="table-list-of-shops">
                    <thead>
                    <tr>
                        <th>Nazwa sklepu</th>
                        <th>Kategoria sklepu</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        shops.map(shop => (<tr key={shop.id}>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
                            <td>
                                <Link to="/start/singleShopView" className="link-show-products"
                                      onClick={() => setId(shop.id)}>Zobacz produkty</Link>
                            </td>
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}