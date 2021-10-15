import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Chat, MessageType } from '../../../api/models';
import StyledMessagesList from '../../elements/messages/StyledMessagesList';
import MessageItem from './MessageItem';



const MessagesList = (props: any): JSX.Element => {
    const { chats, onChatClick } = props;
  

    const renderMessages = (): JSX.Element[] => {
        return chats.sort((a: Chat, b: Chat) => {
            return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();
console.log(chats, "chats")
        })
            .map((chat: Chat) => {
                return (
                    <MessageItem
                        key={chat._id}
                        {...chat}
                        onChatClick={onChatClick}
                    />
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