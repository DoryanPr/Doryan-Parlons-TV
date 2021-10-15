import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Message, MessageType } from '../../../api/models';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;


    return (
        <StyledMessageBox>
            <FlipMove>
                <div className="chat__messages-box">
                    {messages.map((message: Message, i: number) => {
                        return <MessageBoxItem key={message._id} {...message} sender={sender/>
                    })}
                </div>
            </FlipMove>
        </StyledMessageBox>

    )
}

export default MessageBox;

