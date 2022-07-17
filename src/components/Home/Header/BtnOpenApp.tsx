import React, {useContext} from "react";
import {Link} from "react-router-dom";

import '../../../styles/Header/BtnOpenApp.css';

export const BtnOpenApp = () => (
    <Link to="/start" className="btn-open-app">
        <span>Otwórz aplikację</span>
        <span>SoB item</span>
    </Link>
);