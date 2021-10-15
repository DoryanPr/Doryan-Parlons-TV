import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Custom components */
import ChannelCard from './ChannelCard';

const Cards: React.FC = () => {

    const channels = [
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'France 2', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: './images/tf1.jpg', link: 'tf1', viewers: 105 }
    ];

    const renderChannels = (): JSX.Element[] => {
        return channels.map((channel: Object, i: number) => {
            console.log(i)
            return (
                <ChannelCard
                    key={i}
                    {...channel}
                ></ChannelCard>
            )
        })
    }

    return (
        <section className="all-channels">
            <h1 className="all-channels__title">Toutes les chaînes</h1>
            <Row>
                {renderChannels()}
            </Row>
        </section>
    );
};

export default Cards;
