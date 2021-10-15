import React from 'react';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';



const ChatItem = (props: any): JSX.Element => {
    return (
        <StyledChatItem>
            <Avatar />

        </StyledChatItem>
    )
}

export default ChatItem;