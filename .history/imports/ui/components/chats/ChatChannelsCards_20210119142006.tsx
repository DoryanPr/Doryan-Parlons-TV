import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Custom components */
import ChannelCard from './ChatChannels';

const Cards: React.FC = () => {

    const channels = [
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 },
        { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105 }
    ];

    const renderChannels = (): JSX.Element[] => {
        return channels.map((channel: Object, i: number) => {
            return (
                <ChannelCard
                    key={i}
                    {...channel}
                ></ChannelCard>
            )
        })
    }

    return (
        <section className="all-chat_channels">
            <Row>
                {renderChannels()}
            </Row>
        </section>
    );
};

export default Cards;
