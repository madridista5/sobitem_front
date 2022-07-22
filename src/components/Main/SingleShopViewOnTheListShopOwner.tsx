import React, {useEffect, useState} from "react";
import {GetListOfProductsResponse, GetOneShopResponse} from 'types';

import '../../styles/SingleShopViewOnTheList.css';
import {apiUrl} from "../../config/api";
import {Link} from "react-router-dom";

interface Props {
    id: string;
}

export const SingleShopViewOnTheListShopOwner = (props: Props) => {
    const [shop, setShop] = useState<GetOneShopResponse>({
        id: '',
        name: '',
        category: '',
        url: null,
        address: '',
        lat: 0,
        lon: 0,
    });
    const [products, setProducts] = useState<GetListOfProductsResponse>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/oneShop/${props.id}`);
            const data = await res.json();
            setShop(data);

            const resProd = await fetch(`${apiUrl}/product/allProductsFromSingleShop/${props.id}`);
            const dataProd = await resProd.json();
            setProducts(dataProd);
        })();
    },[]);

    const deleteProduct = async (id: string) => {
        await fetch(`${apiUrl}/product/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        });
    }

    return (
        <div className="single-shop-view-wrapper">
            <div className="single-shop-content">
                <h2>{shop.name}</h2>
                <p>Kategoria: {shop.category}</p>
                {shop.url && <p>Adres url: {shop.url}</p>}
                <p>Adres: {shop.address}</p>
                <h2>Produkty:</h2>

                <table className="table-single-shop">
                    <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Cena prdutku</th>
                        <th>Opis produktu</th>
                        <th>ilość</th>
                        <th>Usuń produkt</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product => (<tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price} zł</td>
                            <td>{product.description}</td>
                            <td>{product.count}</td>
                            <td>
                                <Link to="/start/deleteProduct" onClick={() => deleteProduct(product.id)}>Usuń produkt</Link>
                            </td>
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}