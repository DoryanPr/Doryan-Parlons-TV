import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Channel } from '../../../api/models';
import StyledThumbnailsChat from '../../elements/chats/StyledThumbnailsChat';

const ThumbnailsChat = (props: any): JSX.Element => {
    return (
        <StyledThumbnailsChat>
            <h2 className="thumnails-chats__title">Les autres chaînes</h2>
            <div className="thumnails-chats">
                {props.otherChannels.map((channel: Channel) => {
                    return (
                        <a href={'/chats/' + channel.link} className="thumnails-chats__link" style={{ backgroundImage: 'url(' + channel.logo + ')' }}></a>
                    )
                })}
            </div>
        </StyledThumbnailsChat>
    )
}

export default ThumbnailsChat;