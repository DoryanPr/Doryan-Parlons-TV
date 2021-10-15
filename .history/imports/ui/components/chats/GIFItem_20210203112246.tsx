import React from 'react';
import CarouselGif from './GIF';
import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import ResizeObserver from "react-resize-observer";

const GIFItem = (props: any): JSX.Element => {
    // Il faut faire passer la proprieter onClick a fabItem car le compossant ne prend pas en compte onClick
    const { children, iconName, bg, onClick } = props;

    return (
        <>
        <div onClick={onClick} className="gif">
            <CarouselGif onGifClick={(gif, e) => {
                console.log("gif", gif);
                e.preventDefault();
                setModalGif(gif);
            }} />
        </div>
            {modalGif && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, .8)"
                    }}
                    onClick={e => {
                        e.preventDefault();
                        setModalGif(undefined);
                    }}
                >
    
        </div>

    )
}

export default GIFItem;