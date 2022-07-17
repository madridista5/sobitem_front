import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {NavContext} from "../../contexts/nav.context";

import '../../styles/Navigation.css';
import {LoginContext} from "../../contexts/login.context";

export const Navigation = () => {
    const {nav, setNav} = useContext(NavContext);
    const {login} = useContext(LoginContext);

    const list = [
        {name: 'Start', path: '/start', end: true},
        {name: 'Lista sklepów', path: '/start/shops-list'},
        {name: 'Znajdź produkt', path: '/start/products'},
        {name: 'Mapa', path: '/start/map'},
        {name: 'Koszyk', path: '/start/basket'},
    ];

    if (login) {
        list.push(
            {name: 'Dodaj swój sklep', path: '/start/add-shop-form'},
            {name: 'Wyloguj', path: '/start/logout'},
        );
    }

    return <>
        <div className="navigation" style={nav ? {left: '0'} : {left: '-300px'}}>
            {list.map(item => (
                <NavLink key={item.name} to={item.path} end={item.end ? item.end : false}>{item.name}</NavLink>
            ))}
        </div>
        <div className="burger" onClick={() => setNav(!nav)}>
            <i className="fas fa-bars show" style={nav ? {display: 'none'} : {display: 'block'}}/>
            <i className="fas fa-times off" style={nav ? {display: 'block'} : {display: 'none'}}/>
        </div>
        <Link to="/start/basket" className="basket">
            <div/>
        </Link>
    </>
}