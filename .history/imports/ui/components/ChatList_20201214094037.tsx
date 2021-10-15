import React from 'react';

import StyledChatList from '../elements/StyledChatList';

const ChatList = (props: any): JSX.Element => {
    return (
        <StyledChatList>
            {render}
        </StyledChatList>
    )
}

export default ChatList;