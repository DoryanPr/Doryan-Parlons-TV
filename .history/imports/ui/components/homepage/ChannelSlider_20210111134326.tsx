import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import ChannelCard from './ChannelCard';

const ChannelSlider: React.FC = () => {

    const channels = [
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105},
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105}
    ];
    
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
                <div className="channel-slider__item">Mettre des composants Slider </div>
                <div className="channel-slider__item">Channel 2</div>
                <div className="channel-slider__item">Channel 3</div>
                <div className="channel-slider__item">Channel 4</div>
                <div className="channel-slider__item">Channel 5</div>
                <div className="channel-slider__item">Channel 6</div>
                <div style={{width: "350px", height: "200px", background: "black"}}>Channel 7</div>
            </Slider>
        </div>
    );
};

export default ChannelSlider;
