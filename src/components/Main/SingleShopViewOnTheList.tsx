import React from "react";

interface Props {
    id: string;
}

export const SingleShopViewOnTheList = (props: Props) => {
    return <h1>Single Shop View, ID: {props.id}</h1>
}