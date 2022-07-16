import React, {SyntheticEvent, useState} from "react";

import '../../styles/LoginForm.css';
import {apiUrl} from "../../config/api";
import { LoginFormInfo } from "./LoginFormInfo";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    pwd: pass,
                }),
            });
            setIsSentForm(true);
        })();
    }

    if(isSentForm) {
        return <LoginFormInfo/>;
    }

    return (
            <div className="login-form-wrapper">
                <div className="login-form-content">
                    <h2>Logowanie</h2>
                    <form onSubmit={handleForm}>
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
                        <button>Zaloguj</button>
                    </form>
                </div>
            </div>
    )
}