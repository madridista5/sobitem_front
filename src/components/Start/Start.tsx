import React, {useState} from "react";
import {StartHeader} from "./StartHeader";
import {Navigation} from "./Navigation";
import {StartMain} from "./StartMain";
import {NavContext} from "../../contexts/nav.context";

export const Start = () => {
    const [nav, setNav] = useState(false);

    return (
    <NavContext.Provider value={{nav, setNav}}>
        <div className="start-wrapper">
            <StartHeader/>
            <Navigation/>
            <StartMain/>
        </div>
    </NavContext.Provider>
    );
};