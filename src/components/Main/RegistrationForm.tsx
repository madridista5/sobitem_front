import React, {SyntheticEvent, useState} from "react";

import '../../styles/RegistrationForm.css';
import {apiUrl} from "../../config/api";

export const RegistrationForm = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleForm = () => {
        (async () => {
            await fetch(`${apiUrl}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                   email,
                   pwd: pass,
                }),
            });
        })();
    }

    return (
        <div className="registration-wrapper">
            <div className="registration-content">
                <h2>Rejestracja</h2>
                <form action="/start/confirm/registration" onSubmit={handleForm}>
                    <input
                        type="email"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="hasło"
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                    />
                    <button>Zarejestruj</button>
                </form>
            </div>
        </div>
    );
}