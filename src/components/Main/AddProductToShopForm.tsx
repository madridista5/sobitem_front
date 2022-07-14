import React, {useContext, useState} from "react";

import '../../styles/AddProductToShopForm.css';
import {IdContext} from "../../contexts/id.context";
import {apiUrl} from "../../config/api";

export const AddProductToShopForm = () => {
    const {id} = useContext(IdContext);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const handleForm = () => {
        (async () => {
            await fetch(`${apiUrl}/product/add/${id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price,
                    count,
                    description,
                    shopId: id,
                }),
            });
        })();
    }

    return (
        <div className="add-prod-to-basket-form-wrapper">
            <div className="add-prod-to-basket-form-content">
                <h2>Dodaj produkt do sklepu</h2>
                <form action="/start/confirm/addProduct" onSubmit={handleForm}>
                    <input
                        type="text"
                        placeholder="Nazwa produtku"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="number"
                        onChange={e => setPrice(Number(e.target.value))}
                        value={price}
                    />
                    <input
                        type="number"
                        placeholder="Ilość"
                        onChange={e => setCount(Number(e.target.value))}
                        value={count}
                    />
                    <input
                        type="text"
                        placeholder="Opis produtku"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                    <button>Dodaj</button>
                </form>
            </div>
        </div>
    )
}