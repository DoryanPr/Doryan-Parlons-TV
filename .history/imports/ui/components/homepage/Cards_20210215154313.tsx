import { Meteor } from 'meteor/meteor';
import React from 'react';

/* Bootstrap */
import Row from 'react-bootstrap/Row';
import { DummyChannelsChat } from '../../../api/channels';

/* Custom components */
import ChannelCard from './ChannelCard';

const Cards: React.FC = () => {

    const channels = DummyChannelsChat;
    
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
        <section className="all-channels">
            <h1 className="all-channels__title">Toutes les chaînes</h1>
            <Row>
                {renderChannels()}
            </Row>
        </section>
    );
};

export default withTracker((props: any) => {
    return {
        // me renvoi tous les id utilisateurs diférent du mien
        users: props.pattern === "" ? Meteor.users.find({
            _id: {
                //$ne = not equal / non équivalent
                $ne: Meteor.userId()
            }
        }, {
            sort: {
                "profile.name": 1
            }
        }).fetch() : props.users2
    }
})(Cards);
