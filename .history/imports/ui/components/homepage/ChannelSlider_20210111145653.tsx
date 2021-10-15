import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Slick Slider */
import Slider from "react-slick";

/* Custom components */
import SliderCard from './SliderCard';

const ChannelSlider: React.FC = () => {

    const channels = [
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105, messages: 30000, hashtag: # },
        { name: 'France 2', logo: './images/france2.png', link: 'france2', viewers: 105, messages: 30000, hashtag: # },
        { name: 'France 3', logo: './images/france3.png', link: 'france3', viewers: 105, messages: 30000, hashtag: # },
        { name: 'Canal+', logo: './images/canal+.png', link: 'canal+', viewers: 105, messages: 30000, hashtag: # },
        { name: 'France 5', logo: './images/france5.png', link: 'france5', viewers: 105, messages: 30000, hashtag: # },
        { name: 'M6', logo: './images/m6.png', link: 'm6', viewers: 105, messages: 30000, hashtag: # },
        { name: 'Arte', logo: './images/arte.png', link: 'arte', viewers: 105, messages: 30000, hashtag: # },
        { name: 'C8', logo: './images/c8.png', link: 'C8', viewers: 105, messages: 30000, hashtag: # }
    ];

    const renderSlider = (): JSX.Element[] => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <section className="all-channels">
            <h1 className="all-channels__title">Recommandé pour vous</h1>
            <div>
                <Slider className="all-channels__slider" {...settings}>
                    {renderSlider()}
                </Slider>
            </div>
        </section>
    );
};

export default ChannelSlider;
