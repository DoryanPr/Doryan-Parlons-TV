import React from 'react';
import { Component } from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";
import { DummyChannelsChat } from '../../../api/channels';

/* Custom components */
import SliderCard from './SliderCard';

export default class ChannelSlider extends Component {

    render() {
        const channels = DummyChannelsChat;
        const { title, picture, lastMessage, onChatClick, _id, active } = props;

        function SampleNextArrow(props) {
            const { style, onClick } = props;
            return (
                <div className="all-channels__container-slider-next-arrow">
                    <i className="fas fa-arrow-right"
                        style={{ ...style }}
                        onClick={onClick}>
                    </i>
                </div>
            );
        }
    
        function SamplePrevArrow(props) {
            const { style, onClick } = props;
            return (
                <div className="all-channels__container-slider-prev-arrow">
                    <i className="fas fa-arrow-left"
                        style={{ ...style }}
                        onClick={onClick}>
                    </i>
                </div>
            );
        }
    
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        };
    
        return (
            <section className="all-channels">
                <h1 className="all-channels__title">Recommandé pour vous</h1>
                <div className="all-channels__container">
                    <Slider className="all-channels__container-slider" {...settings}>
                        {channels.map((channel, i) => { 
                            return <SliderCard key={i} {...channel} />
                        })}
                    </Slider>
                </div>
            </section>
        );
    }

}