import React from 'react';

import '../styles/App.css';

import {Header} from "./Home/Header/Header";
import {SectionForWhomTheAppIs} from "./Home/SectionForWhomTheAppIs";

export const App = () => {

    return (
        <>
            <Header/>
            <SectionForWhomTheAppIs/>
        </>
    );
};