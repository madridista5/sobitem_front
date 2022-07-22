import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import '../../styles/Map.css';
import '../../utils/fix-map-icon';
import {SimpleShopEntity} from 'types';
import {apiUrl} from "../../config/api";
import {SearchContext} from "../../contexts/search.context";
import {SingleShopViewOnTheMap} from "./SingleShopViewOnTheMap";
import {SearchForm} from "./SearchForm";

export const Map = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [shops, setShops] = useState<SimpleShopEntity[]>([]);

    useEffect(() => {
        (async () => {
            setSearch('');
            const res = await fetch(`${apiUrl}/shop/allShops/${search}`);
            const data = await res.json();
            setShops(data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop/allShops/${search}`);
            const data = await res.json();
            setShops(data);
        })();
    }, [search]);

    return (
        <>
            <SearchForm/>
            <div className="map">
                <MapContainer center={[51.8341211,19.6163938]} zoom={6}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        shops.map(shop => (
                            <Marker key={shop.id} position={[shop.lat, shop.lon]}>
                                <Popup>
                                    <SingleShopViewOnTheMap id={shop.id}/>
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </>
    );
};
