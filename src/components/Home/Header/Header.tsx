import React from "react";

import '../../../styles/Header/Header.css';

import {Logo} from "./Logo";
import {Title} from "./Title";
import {Arrow} from "./Arrow";
import {BtnOpenApp} from "./BtnOpenApp";

export const Header = () => (
    <header>
        <Logo/>
        <Title/>
        <Arrow/>
        <BtnOpenApp/>
    </header>
);