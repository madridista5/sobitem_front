import React, {SyntheticEvent, useState} from "react";

import '../../styles/AddShopForm.css';
import {apiUrl} from "../../config/api";
import {geocode} from "../../utils/geocoding";
import {AddShopFormInfo} from "./AddShopFormInfo";

export const AddShopForm = () => {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            const {lat, lon} = await geocode(address);
            await fetch(`${apiUrl}/shop/add`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    category,
                    url,
                    address,
                    lat,
                    lon,
                }),
            });
        })();
        setIsSentForm(true);
    }

    if(isSentForm) {
        return <AddShopFormInfo/>;
    }

    return (
        <div className="add-shop-form-wrapper">
            <div className="add-shop-form-content">
                <h2>Dodawanie sklepu</h2>
                <form action="/start/shop-added-info" onSubmit={handleForm}>
                    <input
                        type="text"
                        placeholder="Nazwa sklepu"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Kategoria"
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Adres URL"
                        onChange={e => setUrl(e.target.value)}
                        value={url}
                    />
                    <p>Adres (wpisz w następującej kolejności: Miasto, NazwaUlicy Numer):</p>
                    <input
                        type="text"
                        placeholder="Np: Kłodzko, Noworudzka 2"
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        required
                    />
                    <button>Dodaj sklep</button>
                </form>
            </div>
        </div>
    )
};