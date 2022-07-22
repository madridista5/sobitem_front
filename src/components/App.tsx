import React from 'react';
import {Header} from "./Home/Header/Header";
import {SectionForWhomTheAppIs} from "./Home/SectionForWhomTheAppIs";
import {SectionHowToSell} from "./Home/SectionHowToSell";
import {SectionHowToBuy} from "./Home/SectionHowToBuy";
import {SectionEasyBuying} from "./Home/SectionEasyBuying";
import {SectionSearchBar} from "./Home/SectionSearchBar";
import {SectionMap} from "./Home/SectionMap";

import '../styles/App.css';

export const App = () => (
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