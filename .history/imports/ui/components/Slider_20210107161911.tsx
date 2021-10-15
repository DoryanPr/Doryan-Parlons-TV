import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return ( 

            <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                <div><h3>TF1</h3></div>
                <div><h3>France 2</h3></div>
                <div><h3>France 3</h3></div>
                <div><h3>Canal+</h3></div>
                <div><h3>Arte</h3></div>
                <div><h3>6</h3></div>
            </div>

        )