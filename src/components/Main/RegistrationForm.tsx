import React, {SyntheticEvent, useState} from "react";

import '../../styles/RegistrationForm.css';
import {apiUrl} from "../../config/api";
import {RegisterUserResponse} from "types";
import {RegistrationConfirmInfo} from "./RegistrationConfirmInfo";
import {IncorrectEmailInfo} from "./IncorrectEmailInfo";

export const RegistrationForm = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [isSentForm, setIsSentForm] = useState<boolean>(false);
    const [incorrectEmail, setIncorrectEmail] = useState<boolean>(false);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            const res = await fetch(`${apiUrl}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    pwd: pass,
                }),
            });
            const user: RegisterUserResponse = await res.json();
            if (user.id) {
                setIsSentForm(true);
            }
            setIncorrectEmail(true);
        })();
    }

    if (isSentForm) {
        return <RegistrationConfirmInfo userEmail={email}/>;
    }
    if(incorrectEmail) {
        return <IncorrectEmailInfo email={email}/>;
    }

    return (
        <div className="registration-wrapper">
            <div className="registration-content">
                <h2>Rejestracja</h2>
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
                    <button>Zarejestruj</button>
                </form>
            </div>
        </div>
    );
}