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
        const channels = [
            { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
            { name: 'France 2', logo: '/images/france2.png', link: 'france2', viewers: 105, messages: 30000, hashtags: ['#hashtag3'] },
            { name: 'France 3', logo: '/images/france3.png', link: 'france3', viewers: 105, messages: 30000, hashtags: ['#hashtag4', '#hashtag5'] },
            { name: 'Canal+', logo: '/images/canal+.png', link: 'canal+', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
            { name: 'France 5', logo: '/images/france5.png', link: 'france5', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
            { name: 'M6', logo: '/images/m6.png', link: 'm6', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
            { name: 'Arte', logo: '/images/arte.png', link: 'arte', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
            { name: 'C8', logo: '/images/c8.png', link: 'C8', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] }
        ];

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
            vertical: true,
            verticalSwiping: true,
        };

        }
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