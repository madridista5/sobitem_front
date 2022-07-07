import React from 'react';

import '../styles/App.css';

import {Header} from "./Home/Header/Header";
import {SectionForWhomTheAppIs} from "./Home/SectionForWhomTheAppIs";
import {SectionHowToSell} from "./Home/SectionHowToSell";
import {SectionHowToBuy} from "./Home/SectionHowToBuy";

export const App = () => {

    return (
        <>
            <Header/>
            <SectionForWhomTheAppIs/>
            <SectionHowToSell/>
            <SectionHowToBuy/>
        </>
    );
};