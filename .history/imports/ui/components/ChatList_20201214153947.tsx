import React from 'react';
import { Chat } from '../../api/models';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

const ChatList = (props: any): JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;
    const renderChats = (): JSX.Element[] => {
        return chats.map((chat: Chat) => {
            const active:boolean = selectedChat._id === 
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
                    
                />
            )
        })
    }
    return (
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}

export default ChatList;