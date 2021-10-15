import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';

/* Custom components */
import ChannelCard from './ChatChannels';

const ChatChannelsCards: React.FC = () => {

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
        <section className="all-chat__channels">
            <Row>
                {renderChannels()}
            </Row>
        </section>
    );
};

export default ChatChannelsCards;
