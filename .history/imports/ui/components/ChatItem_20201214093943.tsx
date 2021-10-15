import React from 'react';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';



const ChatItem = (props: any): JSX.Element => {
    return (
        <StyledChatItem>
            <Avatar />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title"></span>
                    <div className="content--line1__date"></div>
                </div>
                <div className="content--line1">
                    <span className="content--message"></span>
                    <div className></div>
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;