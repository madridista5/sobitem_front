import React, {useState} from "react";
import {StartHeader} from "./StartHeader";
import {Navigation} from "./Navigation";
import {StartMain} from "./StartMain";
import {NavContext} from "../../contexts/nav.context";
import { SearchContext } from "../../contexts/search.context";

export const Start = () => {
    const [nav, setNav] = useState(false);
    const [search, setSearch] = useState('');

    return (
    <NavContext.Provider value={{nav, setNav}}>
        <SearchContext.Provider value={{search, setSearch}}>
        <div className="start-wrapper">
            <StartHeader/>
            <Navigation/>
            <StartMain/>
        </div>
        </SearchContext.Provider>
    </NavContext.Provider>
    );
};