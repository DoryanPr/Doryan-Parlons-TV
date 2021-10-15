import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';

import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;

    const renderMessages = (newMessage: any): JSX.Element[] => {
        // console.log('messages', newMessage.groupedMessages);
        return newMessage.groupedMessages.map(message => {
            const msgClass: string = `message message--${message.ownership}`;
            if (message.type === "image") {
                const mine: boolean = message.ownership === "mine";
                return (
                    <MessageImage
                        key={message._id}
                        content={message.content}
                        createdAt={message.createdAt}
                        mine={mine}
                    />
                )
            }
            return (
                <MessageText
                    key={message._id}
                    msgClass={msgClass}
                    content={message.content}
                    ownership={message.ownership}
                    createdAt={message.createdAt}
                />
            )
        })
    }
    
    const renderDays = (): JSX.Element[] => {
        return newMessages.map((newMessage, index: number) => {
            const dateText: string = newMessage.today ? "Aujourd'hui" : newMessage.date;
            return (
                <div key={index}>
                    <Day date={dateText} />
                    {renderMessages(newMessage)}
                </div>
            )
        })
    }
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