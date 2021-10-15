import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import SliderCard from './SliderCard';

const ChannelSlider: React.FC = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const renderCards = (): JSX.Element[] => {
        return channels.map((channel: Object, i: number) => {
            console.log(i)
            return (
                <SliderCard
                    key={i}
                    {...channel}
                ></SliderCard>
            )
        })
    }

    return (
        <section className="all-channels">
            <h1 className="all-channels__title">Recommandé pour vous</h1>
            <div>


                <Slider className="channel-slider" {...settings}>
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />

                    <div style={{ width: "325px", height: "200px", background: "black" }}>Channel 7</div>
                </Slider>
            </div>
        </section>
    );
};

export default ChannelSlider;
