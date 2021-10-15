import React from 'react';

import StyledChatList from '../elements/StyledChatList';

const ChatList = (props: any): JSX.Element => {
    return (
        <StyledChatList>
            {renderchats}
        </StyledChatList>
    )
}

export default ChatList;