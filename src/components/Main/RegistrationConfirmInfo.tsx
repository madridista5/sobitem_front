import React from "react";

import '../../styles/RegistrationConfirmInfo.css';
import {Link} from "react-router-dom";

interface Props {
    userEmail: string;
}

export const RegistrationConfirmInfo = (props: Props) => {
    return (
        <div className="registration-confirm-wrapper">
            <div className="registration-confirm-content">
                <p>Twoje konto dla adresu email: "{props.userEmail}" zostało założone. Zaloguj się, aby korzytać z aplikacji SoBitem.</p>
                <Link to="/start/login">Zaloguj</Link>
            </div>
        </div>
    );
}