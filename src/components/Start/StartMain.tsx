import React, {useContext} from "react";
import { Route, Routes} from "react-router-dom";
import {MainView} from "../Main/MainView";
import {NavContext} from "../../contexts/NavContext";

import '../../styles/StartMain.css';

export const StartMain = () => {
    const {nav} = useContext(NavContext);

    return (
        <div className="main" style={nav ? {marginLeft: '300px'} : {marginLeft: '0'}}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                </Routes>
        </div>
    )
}