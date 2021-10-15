import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';

import StyledMessageBox from '../../elements/chats/StyledMessageBox';

import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = [
        {
            chatId: "TijzGPp5xko5TvWyu",
            photo: "photoURL",
            content: "Message 1",
            createdAt: moment().subtract(2, 'days').toDate(),
            type: MessageType.TEXT,
        },

    ];

    return (
        <StyledMessageBox>
            <div className="chat__messages-box">
                {messages.map((message: Message, i: number) => {
                    return <MessageBoxItem key={message._id} {...message} />
                })} 
                
            </div>
        </StyledMessageBox>
    )
}

export default MessageBox;