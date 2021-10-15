import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';

import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import messages from '../../../api'
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = [
      
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