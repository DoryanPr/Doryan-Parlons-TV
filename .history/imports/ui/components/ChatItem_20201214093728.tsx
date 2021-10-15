import React from 'react';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';



const ChatItem = (props: any): JSX.Element => {
    return (
        <StyledChatItem>
            <Avatar />
            <div className="chat--contentContainer">
                <div className=content--line1></div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;