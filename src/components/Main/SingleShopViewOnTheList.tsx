import React, {useEffect, useState} from "react";
import {GetListOfProductsResponse, GetOneShopResponse} from 'types';

import '../../styles/SingleShopViewOnTheList.css';
import {apiUrl} from "../../config/api";

interface Props {
    id: string;
}

export const SingleShopViewOnTheList = (props: Props) => {
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
    }, []);

    return (
        <div className="single-shop-view-wrapper">
            <ul>
                <h2>Nazwa sklepu: {shop.name}</h2>
                <p>Kategoria: {shop.category}</p>
                {shop.url && <p>Adres url: {shop.url}</p>}
                <p>Adres: {shop.address}</p>
                <h2>Produkty:</h2>
                {products.map(product => (<li key={product.id}>Nazwa: {product.name}, Cena: {product.price}, Ilość: {product.count}{product.description && `, Opis: ${product.description}`}</li>))}
            </ul>
        </div>
    );
}