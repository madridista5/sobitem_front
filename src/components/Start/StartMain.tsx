import React, {useContext} from "react";
import { Route, Routes} from "react-router-dom";
import {MainView} from "../Main/MainView";
import {NavContext} from "../../contexts/nav.context";

import '../../styles/StartMain.css';
import {AddShopForm} from "../Main/AddShopForm";
import { ErrorMainPage } from "../Main/ErrorMainPage";
import {Map} from "../Main/Map";
import {ListOfShops} from "../Main/ListOfShops";
import {SingleShopViewOnTheList} from "../Main/SingleShopViewOnTheList";
import {IdContext} from "../../contexts/id.context";
import {FindProduct} from "../Main/FindProduct";
import { Basket } from "../Main/Basket";
import {AddBasketInfo} from "../Main/AddBasketInfo";

export const StartMain = () => {
    const {nav} = useContext(NavContext);
    const {id} = useContext(IdContext);

    return (
        <div className="main" style={nav ? {marginLeft: '300px'} : {marginLeft: '0'}}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="/add-shop-form" element={<AddShopForm/>}/>
                    <Route path="/map" element={<Map/>}/>
                    <Route path="/shops-list" element={<ListOfShops/>}/>
                    <Route path="/singleShopView" element={<SingleShopViewOnTheList id={id}/>}/>
                    <Route path="/products" element={<FindProduct/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/add-basket-info" element={<AddBasketInfo/>}/>
                    <Route path="*" element={<ErrorMainPage/>}/>
                </Routes>
        </div>
    )
}