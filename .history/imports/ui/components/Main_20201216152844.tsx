import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import _ from 'lodash';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { Chat } from '../../api/models';
import { findChat } from '../../api/helpers';

const Main = (props: any): JSX.Element => {
    Tracker.autorun(() => {
        const chatsMeteor.subscribe('chats.mine');
        Meteor.subscribe('message.all');

        // console.log('chats', findChat());
    });

    const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
    const [selectedChat, setSelectedChat] = React.useState<Chat>({});
    
    const handleChatClick = (_id: string): void => {
        console.log('selected chat before', selectedChat)
        if (!messageVisible) {
            setMessageVisible(true);
        }
        const newChat: Chat = _.find(findChat(), { _id })
        console.log('selected chat after', newChat);
        setSelectedChat(newChat);

    }

    return (
        <StyledMain>
            <Left
                chats={findChat()}
                onChatClick={handleChatClick}
                selectedChat={selectedChat}

            />
            <Right
                right
                messageVisible={messageVisible}
                selectedChat={selectedChat}
            />
        </StyledMain>
    )
}

export default Main;