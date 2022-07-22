import React, {useContext} from "react";
import {LoginContext} from "../../contexts/login.context";

import '../../styles/LoginFormInfo.css';

interface Props {
    email: string;
}

export const LoginFormInfo = (props: Props) => {
    const {login} = useContext(LoginContext);

    return (
        <div className="login-form-info-wrapper">
            <div className="login-form-info-content">
                {
                    login ?
                        <p>Użytkownik o adresie email: "{props.email}" został poprawnie zalogowany 👍. Zapraszamy do
                            korzystania z aplikacji SoB item 🙂</p>
                        : <p>Niepoprawny login lub hasło.</p>
                }
            </div>
        </div>
    );
}