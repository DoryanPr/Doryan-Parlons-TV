import React from 'react';
import { Chat } from '../../api/models';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

const MessagesList = (props: any): JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;

    const renderMessages = (): JSX.Element[] => {
        return chats.sort((a: Chat, b: Chat) => {
            return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();

        })
            .map((chat: Chat) => {
                const active: boolean = selectedChat._id === chat._id;
                return (
                    <ChatItem
                        key={chat._id}
                        {...chat}
                        onChatClick={onChatClick}
                        active={active}
                    />
                )
            })
    }
    return (
        <StyledChatList>
            {renderMessages()}
        </StyledChatList>
    )
}

export default MessagesList;