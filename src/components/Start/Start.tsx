import React, {useState} from "react";
import {StartHeader} from "./StartHeader";
import {Navigation} from "./Navigation";
import {StartMain} from "./StartMain";
import {NavContext} from "../../contexts/nav.context";
import {SearchContext} from "../../contexts/search.context";
import {IdContext} from "../../contexts/id.context";
import {LoginContext} from "../../contexts/login.context";

export const Start = () => {
    const [nav, setNav] = useState(false);
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');
    const [login, setLogin] = useState(false);

    return (
        <NavContext.Provider value={{nav, setNav}}>
            <SearchContext.Provider value={{search, setSearch}}>
                <IdContext.Provider value={{id, setId}}>
                    <LoginContext.Provider value={{login, setLogin}}>
                        <div className="start-wrapper">
                            <StartHeader/>
                            <Navigation/>
                            <StartMain/>
                        </div>
                    </LoginContext.Provider>
                </IdContext.Provider>
            </SearchContext.Provider>
        </NavContext.Provider>
    );
};