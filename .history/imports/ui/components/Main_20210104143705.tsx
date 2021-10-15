import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { Chat } from '../../api/models';
import { findChat } from '../../api/helpers';
import StyledOtherProfile from '../elements/StyledOtherProfile';
import OtherProfile from './OtherProfile';

const Main = (props: any): JSX.Element => {
   /* const [loading, setLoading] = React.useState<boolean>(true);
    Tracker.autorun(() => {
        const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
        const messagesReady: boolean = Meteor.subscribe('message.all').ready();

        // console.log('chats', findChat());
        if (chatsReady && messagesReady) {
            setLoading(false);
        }
    });*/

    const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
    const [selectedChat, setSelectedChat] = React.useState<Chat>({});
    const [OP, setOP] = React.useState<any>({});


    const handleChatClick = (_id: string): void => {
       // console.log('selected chat before', selectedChat)
        if (!messageVisible) {
            setMessageVisible(true);
        }
        const newChat: Chat = _.find(props.chats, { _id })
       // console.log('selected chat after', newChat);
        setSelectedChat(newChat);
    }
    const handleAvatarClick = (otherId: string): void => {
        setOP({
            visible: true,
            otherId
        });
    }
    const handleClose = (): void => {
        setOP({
            visible: false,
            otherId
        })
    }

return (
        <StyledMain>
            
            {!props.loading ? (
                <React.Fragment>
                    <Left
                        chats={props.chats}
                        onChatClick={handleChatClick}
                        selectedChat={selectedChat}

                    />
                    <Right
                        right
                        messageVisible={messageVisible}
                        selectedChat={selectedChat}
                        onAvatarClick={handleAvatarClick}
                />
                {OP.visible ? (
                    <OtherProfile
                        onClose={handleClose}
                        otherUserId={OP.otherId} />
                ) : null}
                </React.Fragment>
            ) : "loading"}
        </StyledMain>
    )
}

export default withTracker(() => {
    const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
    const messagesReady: boolean = Meteor.subscribe('message.all').ready();
    return {
        loading: chatsReady && messagesReady ? false : true,
        chats: findChat()
    }
})(Main);