import React from 'react';
import { Chat } from '../../api/models'
import StyledChatList from '../elements/StyledChatList';

const ChatList = (props: any): JSX.Element => {
    const { chats } = props;
    const renderChats = (): JSX.Element[] => {
        return chats.map((chat:Chat))
    }
    return (
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}

export default ChatList;