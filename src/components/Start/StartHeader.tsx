import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../contexts/login.context";
import {apiUrl} from "../../config/api";

import '../../styles/StartHeader.css';

export const StartHeader = () => {
    const {login, setLogin} = useContext(LoginContext);

    const handleClick = () => {
        if (login) {
            alert('Zostaniesz wylogowany');
            (async () => {
                await fetch(`${apiUrl}/auth/logout`, {
                    credentials: 'include',
                });
                setLogin(false);
            })();
        }
    }

    return (
        <header className="start-header">
            <Link to="/" onClick={handleClick}>
                <div className="start-header-logo"/>
                <div className="start-header-sobitem">SoB item</div>
            </Link>
            <div className="registration-wrap">
                <Link className="login" to="/start/login">Logowanie</Link>
                <Link className="registration" to="/start/registration">Rejestracja</Link>
            </div>
        </header>
    );
}