import React from "react";
import { Link } from "react-router-dom";

import '../../styles/StartHeader.css';

export const StartHeader = () => (
    <header className="start-header">
        <Link to="/">
            <div className="start-header-logo"/>
            <div className="start-header-sobitem">SoB item</div>
        </Link>
        <div className="registration-wrap">
            <Link className="login" to="/login">Logowanie</Link>
            <Link className="registration" to="/registration">Rejestracja</Link>
        </div>
    </header>
);