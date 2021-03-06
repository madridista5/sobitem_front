import React, {useContext, useEffect} from "react";
import {apiUrl} from "../../config/api";
import {LoginContext} from "../../contexts/login.context";

import '../../styles/Logout.css';

export const Logout = () => {
    const {setLogin} = useContext(LoginContext);

    useEffect(() => {
        (async () => {
            await fetch(`${apiUrl}/auth/logout`, {
                credentials: 'include',
            });
            setLogin(false);
        })();
    }, []);

    return (
        <div className="logout-form-wrapper">
            <div className="logout-form-content">
                <h2>Zostałeś wylogowany</h2>
            </div>
        </div>
    );
}