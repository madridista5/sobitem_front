import React from "react";

import '../../styles/RegistrationConfirmInfo.css';
import {Link} from "react-router-dom";

export const RegistrationConfirmInfo = () => {
    return (
        <div className="registration-confirm-wrapper">
            <div className="registration-confirm-content">
                <p>Twoje konto zostało założone. Zaloguj się, aby korzytać z aplikacji SoBitem.</p>
                <Link to="/start/login">Zaloguj</Link>
            </div>
        </div>
    );
}