import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Message, MessageType, User } from '../../../api/models';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;
    const { onUpload } = props;

    const renderMessages = (newMessage: any): JSX.Element[] => {
        // console.log('messages', newMessage.groupedMessages);
        return newMessage.groupedMessages.map(message => {
           /* if (message.type === "image") {
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
                <MessageBoxItem
                    key={message._id}
                    content={message.content}
                    sender={message.sender.username}
                    createdAt={message.createdAt}
                />
            )
        })
    }





























    return (
        <StyledMessageBox>
            <FlipMove>
                <div className="chat__messages-box">
                    {messages.map((message: Message, i: number) => {
                        return <MessageBoxItem key={message._id} {...message}/>
                    })}
                </div>
            </FlipMove>
        </StyledMessageBox>

    )
}

export default MessageBox;

