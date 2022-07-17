import React, {useContext, useEffect, useState} from "react";
import {SearchForm} from "./SearchForm";

import '../../styles/FindProduct.css';
import {GetListOfProductsResponse, GetOneProductResponse} from "types";
import {apiUrl} from "../../config/api";
import {SearchContext} from "../../contexts/search.context";
import {Link} from "react-router-dom";
import {LoginContext} from "../../contexts/login.context";

export const FindProduct = () => {
    const [products, setProducts] = useState<GetListOfProductsResponse>([]);
    const {search, setSearch} = useContext(SearchContext);
    const {login} = useContext(LoginContext);

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

    const handleClick = (product: GetOneProductResponse) => {
        if(!login) {
            alert('Nie jesteś zalogowany! ');
            return;
        }

        (async () => {
            await fetch(`${apiUrl}/basket`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: product.name,
                    price: Number(product.price),
                    count: 1,
                    productId: product.id,
                }),
            });
        })();
    }

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
                            <td>
                                <Link
                                    to="/start/add-basket-info"
                                    onClick={() => handleClick(product)}
                                >Dodaj do koszyka</Link>
                            </td>
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}