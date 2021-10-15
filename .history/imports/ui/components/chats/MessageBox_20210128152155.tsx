import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;
    const format: string = "D MMM Y";
    
    // groupedMessages est un objet (dictionnaire)
    const groupedMessages: any = _.groupBy(messages, message => {
        return moment(message.createdAt).format(format);
    })
    // console.log('groupedMessages', groupedMessages);


    // Transforme le dictionnaire en tableau
    const newMessages: any[] = Object.keys(groupedMessages)
        .map(key => {
            return {
                date: key,
                groupedMessages: groupedMessages[key],
                today: moment().format(format) === key
            }
        });

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



/*

 return (
        <StyledMessageBox>
            <div className="chat__messages-box">
                {messages.map((message: Message, i: number) => {
                    return <MessageBoxItem key={message._id} {...message} />
                })}
            </div>
        </StyledMessageBox>

    )

    */