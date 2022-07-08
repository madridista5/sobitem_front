import React, {useState} from "react";

import '../../styles/Navigation.css';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    const [nav, setNav] = useState<boolean>(false);

    return <>
        <div className="navigation" style={nav ? {left: '0'} : {left: '-300px'}}>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/start">Start</NavLink>
            <NavLink to="/add-shop-form">Dodaj swój sklep</NavLink>
            <NavLink to="/shops-list">Lista sklepów</NavLink>
            <NavLink to="/products">Znajdź produkt</NavLink>
            <NavLink to="/map">Mapa</NavLink>
        </div>
        <div className="burger" onClick={() => setNav(!nav)}>
            <i className="fas fa-bars show" style={nav ? {display: 'none'} : {display: 'block'}}/>
            <i className="fas fa-times off" style={nav ? {display: 'block'} : {display: 'none'}}/>
        </div>
    </>
}