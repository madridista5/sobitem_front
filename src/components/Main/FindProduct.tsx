import React, {useContext, useEffect, useState} from "react";
import {SearchForm} from "./SearchForm";

import '../../styles/FindProduct.css';
import { GetListOfProductsResponse } from "types";
import {apiUrl} from "../../config/api";
import {SearchContext} from "../../contexts/search.context";
import {Link} from "react-router-dom";

export const FindProduct = () => {
    const [products, setProducts] = useState<GetListOfProductsResponse>([]);
    const {search, setSearch} = useContext(SearchContext);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/product`);
            const data = await res.json();
            setProducts(data);
            setSearch('');
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/product/allProducts/${search}`);
            const data = await res.json();
            setProducts(data);
        })();
    }, [search]);

    return (
        <>
            <SearchForm/>
            <div className="find-product-wrapper">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Cena prdutku</th>
                        <th>Dostępna ilość</th>
                        <th>Opis produktu</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product => (<tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price} zł</td>
                            <td>{product.count}</td>
                            <td>{product.description}</td>
                            <td><Link to="/add-basket-info">Dodaj do koszyka</Link></td>
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}