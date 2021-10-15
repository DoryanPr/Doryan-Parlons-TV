import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import ChannelCard from './ChannelCard';

const ChannelSlider: React.FC = () => {

  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider className="channel-slider" {...settings}>
                <div className="channel-slider__item">Mettre des composants carte pour slider </div>
                <div className="channel-slider__item">Mettre des composants carte pour slider</div>
                <div className="channel-slider__item">Mettre des composants carte pour slider</div>
                <div className="channel-slider__item">Mettre des composants carte pour slider</div>
                <div className="channel-slider__item">Mettre des composants carte pour slider</div>
                <div className="channel-slider__item">Mettre des composants carte pour slider</div>
                <div style={{ width: "350px", height: "200px", background: "black" }}>Channel 7</div>
            </Slider>
        </div>
    );
};

export default ChannelSlider;
