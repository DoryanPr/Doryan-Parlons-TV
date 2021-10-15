import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessages from '../../elements/chats/StyledMessages';
import Avatar from '../Avatar';
import MessageBox from './MessageBox';
import MessageEdit from './MessageEdit';

const Messages = (props: any): JSX.Element => {
    const { channel } = props;
    const handleSend = (content: string, type: MessageType): void => {
        const message: Message = {
            chatId: channel._id,
            content,
            createdAt: moment().toDate(),
            senderId: Meteor.userId(),
            type,
            read: false
        }
    }
    return (
        <StyledMessages>
            <div className="chat__messages">
                <MessageBox messages={props.messages} />
                <MessageEdit onSend={handleSend} />
            </div>
        </StyledMessages>
    )
}

export default Messages;