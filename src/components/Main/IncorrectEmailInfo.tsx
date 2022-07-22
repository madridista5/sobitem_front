import React from "react";

import '../../styles/IncorrectEmailInfo.css';

interface Props {
    email: string;
}

export const IncorrectEmailInfo = (props: Props) => {

    return (
        <div className="incorrect-email-wrapper">
            <div className="incorrect-email-content">
                <p>Nie udalo się założyć konta. Email: "{props.email}" jest już zajęty.</p>
            </div>
        </div>
    );
}