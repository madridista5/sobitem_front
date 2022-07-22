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
import {BuyAllInfo} from "../Main/BuyAllInfo";
import { RemoveFromBasketInfo } from "../Main/RemoveFromBasketInfo";
import {RegistrationForm} from "../Main/RegistrationForm";
import {LoginForm} from "../Main/LoginForm";
import {Logout} from "../Main/Logout";
import {AddProductToShopForm} from "../Main/AddProductToShopForm";
import {ListOfShopsLoggedUser} from "../Main/ListOfShopsLoggedUser";
import {DeletedShopInfo} from "../Main/DeletedShopInfo";
import {DeletedProductInfo} from "../Main/DeletedProductInfo";
import {SingleShopViewOnTheListShopOwner} from "../Main/SingleShopViewOnTheListShopOwner";
import {EditShopForm} from "../Main/EditShopForm";

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
                    <Route path="/basket/bought-info" element={<BuyAllInfo/>}/>
                    <Route path="/remove-from-basket-info" element={<RemoveFromBasketInfo/>}/>
                    <Route path="/registration" element={<RegistrationForm/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/addProductToShop" element={<AddProductToShopForm/>}/>
                    <Route path="/my-shop" element={<ListOfShopsLoggedUser/>}/>
                    <Route path="/deleteShop" element={<DeletedShopInfo/>}/>
                    <Route path="/deleteProduct" element={<DeletedProductInfo/>}/>
                    <Route path="/singleShopViewForOwner" element={<SingleShopViewOnTheListShopOwner id={id}/>}/>
                    <Route path="/editShop" element={<EditShopForm/>}/>
                    <Route path="*" element={<ErrorMainPage/>}/>
                </Routes>
        </div>
    )
}