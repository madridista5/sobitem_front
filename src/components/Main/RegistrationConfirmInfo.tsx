import React from "react";
import {Link} from "react-router-dom";

import '../../styles/RegistrationConfirmInfo.css';

interface Props {
    userEmail: string;
}

export const RegistrationConfirmInfo = (props: Props) => (
    <div className="registration-confirm-wrapper">
        <div className="registration-confirm-content">
            <p>Twoje konto dla adresu email: "{props.userEmail}" zostało założone. Zaloguj się, aby korzytać z aplikacji
                SoBitem.</p>
            <Link to="/start/login">Zaloguj</Link>
        </div>
    </div>
);