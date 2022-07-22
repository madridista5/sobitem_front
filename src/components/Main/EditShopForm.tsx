import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {IdContext} from "../../contexts/id.context";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";

import '../../styles/EditShopForm.css';
import { GetOneShopResponse } from "types";
import {EditShopFormInfo} from "./EditShopFormInfo";

export const EditShopForm = () => {
    const {id} = useContext(IdContext);
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [url, setUrl] = useState<string | null>('');
    const [address, setAddress] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/oneShop/${id}`, {
                credentials: 'include',
            });
            const data: GetOneShopResponse = await res.json();
            setName(data.name);
            setCategory(data.category);
            setUrl(data.url);
            setAddress(data.address);
        })();
    }, []);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            const {lat, lon} = await geocode(address);
            await fetch(`${apiUrl}/shop/edit`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    id,
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
        return <EditShopFormInfo/>;
    }

    return (
        <div className="edit-shop-form-wrapper">
            <div className="edit-shop-form-content">
                <h2>Edycja sklepu</h2>
                <form onSubmit={handleForm}>
                    <input
                        type="text"
                        placeholder={name}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <input
                        type="text"
                        placeholder={category}
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                        required
                    />
                    <input
                        type="text"
                        placeholder={url ? url : ''}
                        onChange={e => setUrl(e.target.value)}
                        value={url ? url : ''}
                    />
                    <p>Adres (wpisz w następującej kolejności: Miasto, NazwaUlicy Numer):</p>
                    <input
                        type="text"
                        placeholder={address}
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        required
                    />
                    <button>Edytuj sklep</button>
                </form>
            </div>
        </div>
    )

}