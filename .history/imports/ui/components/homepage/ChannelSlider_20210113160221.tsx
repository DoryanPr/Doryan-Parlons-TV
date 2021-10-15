import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import SliderCard from './SliderCard';

const ChannelSlider: React.FC = () => {

    const channels = [
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
        { name: 'France 2', logo: './images/france2.png', link: 'france2', viewers: 105, messages: 30000, hashtags: ['#hashtag3'] },
        { name: 'France 3', logo: './images/france3.png', link: 'france3', viewers: 105, messages: 30000, hashtags: ['#hashtag4', '#hashtag5'] },
        { name: 'Canal+', logo: './images/canal+.png', link: 'canal+', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
        { name: 'France 5', logo: './images/france5.png', link: 'france5', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
        { name: 'M6', logo: './images/m6.png', link: 'm6', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
        { name: 'Arte', logo: './images/arte.png', link: 'arte', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
        { name: 'C8', logo: './images/c8.png', link: 'C8', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] }
    ];

    const renderSlider = (): JSX.Element[] => {
        return channels.map((channel: Object, i: number) => {
            console.log(i)
            return (
                <Row>
                    <SliderCard
                        key={i}
                        {...channel}
                    ></SliderCard>
                </Row>
            )
        })
    }

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <i className="fas fa-arrow-right"
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}>

            </i>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div className="all-channels__container-slider-prev-arrow">

            <i  className="fas fa-arrow-left"
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}>
                
            </i>
                    </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow className="all-channels__container-slider-next-arrow"/>,
        prevArrow: <SamplePrevArrow className="all-channels__container-slider-prev-arrow"/>
    };


    return (
        <section className="all-channels">
            <h1 className="all-channels__title">Recommandé pour vous</h1>
            <div className="all-channels__container">
                <Slider className="all-channels__container-slider" {...settings}>
                    {renderSlider()}
                </Slider>
            </div>
        </section>
    );
};

export default ChannelSlider;
