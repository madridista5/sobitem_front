import React, {SyntheticEvent, useContext, useState} from "react";

import '../../styles/LoginForm.css';
import {apiUrl} from "../../config/api";
import {LoginContext} from "../../contexts/login.context";
import {LoginFormInfo} from "./LoginFormInfo";
import { LoggedIn } from "./LoggedIn";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);
    const {login, setLogin} = useContext(LoginContext);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            const res = await fetch(`${apiUrl}/auth/login`, {
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
            const data = await res.json();
            setLogin(data.ok);
            setIsSentForm(true);
        })();
    }

    if(isSentForm) {
        return <LoginFormInfo email={email}/>;
    }

    return (
            <>
                {
                    login ?
                        <LoggedIn/>
                        : <div className="login-form-wrapper">
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
                }
            </>
    )
}