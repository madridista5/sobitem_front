import React, {useContext, useEffect, useState} from "react";
import {ShopEntity} from 'types';

import '../../styles/ListOfShops.css';
import {apiUrl} from "../../config/api";
import {Link} from "react-router-dom";
import {IdContext} from "../../contexts/id.context";

export const ListOfShopsLoggedUser = () => {
    const [shops, setShops] = useState<ShopEntity[]>([]);
    const {setId} = useContext(IdContext);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/allShopsLoggedUser`, {
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
                        <th>Akcja</th>
                        <th>Akcja</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        shops.map(shop => (<tr key={shop.id}>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
                            <td>
                                <Link to="/start/singleShopViewForOwner" className="link-show-products"
                                      onClick={() => setId(shop.id)}>Zobacz produkty</Link>
                            </td>
                            <td>
                                <Link to="/start/addProductToShop" className="link-show-products"
                                      onClick={() => setId(shop.id)}>Dodaj produkt</Link>
                            </td>
                            <td>
                                <Link to="/start/editShop"
                                      className="link-show-products"
                                      onClick={() => setId(shop.id)}>Edytuj sklep</Link>
                            </td>
                            <td>
                                <Link to="/start/deleteShop"
                                      className="link-show-products"
                                      onClick={() => setId(shop.id)}>Usuń sklep</Link>
                            </td>
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}