import React from 'react';
import { Component } from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import ChatSliderCard from './ChatSliderCard';

export default class ChatSlider extends Component {

    render() {
        const channels = DummyChannelsChat;


        function SampleNextArrow(props) {
            const { style, onClick } = props;
            return (
                <div className="chat-slider__container-slider-next-arrow">
                    <i className="fas fa-arrow-down"
                        style={{ ...style }}
                        onClick={onClick}>
                    </i>
                </div>
            );
        }

        function SamplePrevArrow(props) {
            const { style, onClick } = props;
            return (
                <div className="chat-slider__container-slider-prev-arrow">
                    <i className="fas fa-arrow-up"
                        style={{ ...style }}
                        onClick={onClick}>
                    </i>
                </div>
            );
        }

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            vertical: !window.matchMedia("(max-width:768px)").matches,
            verticalSwiping: !window.matchMedia("(max-width:768px)").matches,
        };

        return (
            <section className="chat-slider">
                <div className="chat-slider__container">
                    <Slider className="chat-slider__container-slider" {...settings}>
                        {channels.map((channel, i) => {
                            return <ChatSliderCard key={i} {...channel} />
                        })}
                    </Slider>
                </div>
            </section>
        );
    }

}