import React, {useContext, useEffect, useState} from "react";
import {ListProductsInBasketResponse} from "types";

import '../../styles/Basket.css';
import {apiUrl} from "../../config/api";
import {Link} from "react-router-dom";
import {LoginContext} from "../../contexts/login.context";
import {NotLogin} from "./NotLogin";

export const Basket = () => {
    const [productsInBasket, setProductsInBasket] = useState<ListProductsInBasketResponse>([]);
    const [sum, setSum] = useState<number>(0);
    const {login} = useContext(LoginContext);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/basket`, {
                credentials: 'include',
            });
            const data = await res.json();
            setProductsInBasket(data);

            const resSum = await fetch(`${apiUrl}/basket/total-price`, {
                credentials: 'include',
            });
            const dataSum = await resSum.json();
            setSum(Number(dataSum.sum));
        })();
    }, []);

    const removeItem = (id: string) => {
        (async () => {
            await fetch(`${apiUrl}/basket/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
        })();
    }

    const clearBasket = () => {
        (async () => {
            await fetch(`${apiUrl}/basket/clear-basket`, {
                credentials: 'include',
            });
            setProductsInBasket([]);
        })();
    }

    if(!login) {
        return <NotLogin info="Aby móc zobaczyć swój koszyk musisz się zalogować."/>;
    }

    return (
        <div className="basket-wrapper">
            <div className="basket-content">
                <h2>Twój koszyk</h2>
                <table className="table-basket">
                    <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Cena prdutku</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productsInBasket.map(product => (<tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price} zł</td>
                            <td>
                                <Link to="/start/remove-from-basket-info" onClick={() => removeItem(product.id)}>Usuń z koszyka</Link>
                            </td>
                        </tr>))
                    }
                    </tbody>
                </table>
                <h2>Suma: {sum} zł.</h2>
                <Link to="bought-info" className="btn-buy-now" onClick={clearBasket}>Kup teraz</Link>
            </div>
        </div>
    );
}