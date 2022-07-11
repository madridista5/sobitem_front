import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import '../../styles/Map.css';
import '../../utils/fix-map-icon';
import {SimpleShopEntity} from 'types';
import {apiUrl} from "../../config/api";
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [shops, setShops] = useState<SimpleShopEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/shop`);
            const data = await res.json();
            setShops(data);
        })();
    }, []);

    return (
        <div className="map">
            <MapContainer center={[51.8341211,19.6163938]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    shops.map(shop => (
                        <Marker key={shop.id} position={[shop.lat, shop.lon]}>
                            <Popup>
                                <p>Podgląd sklepu</p>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};