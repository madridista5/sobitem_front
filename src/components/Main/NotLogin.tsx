import React from "react";

import '../../styles/LoginFormInfo.css';

interface Props {
    info: string
}

export const NotLogin = (props: Props) => (
    <div className="login-form-info-wrapper">
        <div className="login-form-info-content">
            <p>Nie jesteś zalogowany. {props.info}</p>
        </div>
    </div>
)