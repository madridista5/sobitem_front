import React, {useEffect} from "react";

import '../../styles/Logout.css';
import {apiUrl} from "../../config/api";

export const Logout = () => {

    useEffect(() => {
        (async () => {
            await fetch(`${apiUrl}/auth/logout`, {
                credentials: 'include',
            });
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