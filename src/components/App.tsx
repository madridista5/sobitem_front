import React, {useContext, useEffect} from 'react';

import '../styles/App.css';

import {Header} from "./Home/Header/Header";
import {SectionForWhomTheAppIs} from "./Home/SectionForWhomTheAppIs";
import {SectionHowToSell} from "./Home/SectionHowToSell";
import {SectionHowToBuy} from "./Home/SectionHowToBuy";
import {SectionEasyBuying} from "./Home/SectionEasyBuying";
import {SectionSearchBar} from "./Home/SectionSearchBar";
import {SectionMap} from "./Home/SectionMap";

export const App = () => {
    return (
        <>
            <Header/>
            <SectionForWhomTheAppIs/>
            <SectionHowToSell/>
            <SectionHowToBuy/>
            <SectionEasyBuying/>
            <SectionSearchBar/>
            <SectionMap/>
        </>
    );
};