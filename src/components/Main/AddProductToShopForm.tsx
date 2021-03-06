import React, {SyntheticEvent, useContext, useState} from "react";
import {IdContext} from "../../contexts/id.context";
import {apiUrl} from "../../config/api";
import {AddProductToShopFormInfo} from "./AddProductToShopFormInfo";
import {LoginContext} from "../../contexts/login.context";
import {NotLogin} from "./NotLogin";

import '../../styles/AddProductToShopForm.css';

export const AddProductToShopForm = () => {
    const {id} = useContext(IdContext);
    const {login} = useContext(LoginContext);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            await fetch(`${apiUrl}/product/add/${id}`, {
                method: 'POST',
                credentials: 'include',
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
        setIsSentForm(true);
    }

    if(isSentForm) {
        return <AddProductToShopFormInfo/>;
    }

    if(!login) {
        return <NotLogin info="Aby móc dodać produkt do sklepu, musisz być zalogowany."/>;
    }

    return (
        <div className="add-prod-to-basket-form-wrapper">
            <div className="add-prod-to-basket-form-content">
                <h2>Dodaj produkt do sklepu</h2>
                <form onSubmit={handleForm}>
                    <input
                        type="text"
                        placeholder="Nazwa produtku"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <p>Cena:</p>
                    <input
                        type="number"
                        onChange={e => setPrice(Number(e.target.value))}
                        value={price}
                    />
                    <p>Ilość:</p>
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