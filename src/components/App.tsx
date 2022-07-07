import React from 'react';

import '../styles/App.css';

import {Header} from "./Home/Header/Header";
import {SectionForWhomTheAppIs} from "./Home/SectionForWhomTheAppIs";
import {SectionHowToSell} from "./Home/SectionHowToSell";
import {SectionHowToBuy} from "./Home/SectionHowToBuy";
import {SectionEasyBuying} from "./Home/SectionEasyBuying";
import {SectionSearchBar} from "./Home/SectionSearchBar";

export const App = () => {

    return (
        <>
            <Header/>
            <SectionForWhomTheAppIs/>
            <SectionHowToSell/>
            <SectionHowToBuy/>
            <SectionEasyBuying/>
            <SectionSearchBar/>
        </>
    );
};