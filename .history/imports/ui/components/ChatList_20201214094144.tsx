import React from 'react';

import StyledChatList from '../elements/StyledChatList';

const ChatList = (props: any): JSX.Element => {
    const { chats }
    const renderChats = (): JSX.Element => {
        
    }
    return (
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}

export default ChatList;