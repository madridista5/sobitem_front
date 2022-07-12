import React, {useContext} from "react";
import { Route, Routes} from "react-router-dom";
import {MainView} from "../Main/MainView";
import {NavContext} from "../../contexts/nav.context";

import '../../styles/StartMain.css';
import {AddShopForm} from "../Main/AddShopForm";
import { ErrorMainPage } from "../Main/ErrorMainPage";
import {Map} from "../Main/Map";

export const StartMain = () => {
    const {nav} = useContext(NavContext);

    return (
        <div className="main" style={nav ? {marginLeft: '300px'} : {marginLeft: '0'}}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="/add-shop-form" element={<AddShopForm/>}/>
                    <Route path="/map" element={<Map/>}/>
                    <Route path="*" element={<ErrorMainPage/>}/>
                </Routes>
        </div>
    )
}