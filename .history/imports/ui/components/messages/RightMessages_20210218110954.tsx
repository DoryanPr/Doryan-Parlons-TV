import { Meteor } from 'meteor/meteor';
import React from 'react';
import StyledNoConnected from '../../elements/friends/StyledNoConnected';
import StyledRightMessages from '../../elements/messages/StyledRightMessages';
import MessageView from '../chats/MessageView';
import NoConnected from '../friends/NoConnected';
import MessagesList from './MessagesList';


const RightMessages = (props: any): JSX.Element => {
    const { handleChatClick, messageVisible, selectedChat, onChatClick, chats, message } = props;
    return (

        Meteor.user() == null ? (
            <StyledNoConnected>
                <NoConnected />
            </StyledNoConnected>
        ) : (
                <StyledRightMessages>
                    {messageVisible ? (
                        <MessageView
                            {...props}
                        />
                    ) : (
                            <MessagesList
                                messageVisible={messageVisible}
                                chats={chats}
                                onChatClick={onChatClick}
                                selectedChat={selectedChat}
                                message={props.message}

                            />
                        )}
                </StyledRightMessages>
            )
    )
}

export default RightMessages;