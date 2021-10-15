import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Chat, MessageType } from '../../../api/models';
import StyledMessagesList from '../../elements/messages/StyledMessagesList';
import MessageItem from './MessageItem';



const MessagesList = (props: any): JSX.Element => {
    const { chats, onChatClick, message } = props;


    const renderMessages = (): JSX.Element[] => {
        return chats.sort((a: Chat, b: Chat) => {
            console.log(chats, "chats")
            return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();
        })
            .map((chat: Chat) => {
                return (
                    <a href={'/profile-message/' + chat._id}>
                        <MessageItem
                            key={chat._id}
                            {...chat}

                        />
                    </a>

                )
            })
    }
    return (
        <StyledMessagesList>
            {renderMessages()}
        </StyledMessagesList>
    )
}

export default MessagesList;