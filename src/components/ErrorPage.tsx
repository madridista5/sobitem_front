import React, {useState} from "react";
import {NavContext} from "../contexts/nav.context";
import {Navigation} from "./Start/Navigation";
import {StartHeader} from "./Start/StartHeader";

import '../styles/ErrorPage.css';


export const ErrorPage = () => {
    const [nav, setNav] = useState(false);

    return (
        <NavContext.Provider value={{nav, setNav}}>
            <div className="start-wrapper">
                <StartHeader/>
                <Navigation/>
                <div className="error" style={nav ? {marginLeft: '300px'} : {marginLeft: '0'}}>
                    <div className="opacity-error-view"/>
                    <p>Ups... Nie ma takiej strony...</p>
                </div>
            </div>
        </NavContext.Provider>
    );
};