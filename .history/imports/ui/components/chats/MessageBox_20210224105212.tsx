import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import MessageBoxItem from './MessageBoxItem';
import _ from 'lodash';
import Day from './Day';
import { Message, MessageType, User } from '../../../api/models';


const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;
    const format: string = "D / M / Y";

    // groupedMessages est un objet (dictionnaire)
    const groupedMessages: any = _.groupBy(messages, message => {
        return moment(message.createdAt).format(format);
    })

    // Transforme le dictionnaire en tableau
    const newMessages: any[] = Object.keys(groupedMessages)
        .map(key => {
            return {
                date: key,
                groupedMessages: groupedMessages[key],
                today: moment().format(format) === key
            }
        });
    const renderMessages = (newMessage: any): JSX.Element[] => {
        return newMessage.groupedMessages.map(message => {
            return (
                <MessageBoxItem
                    key={message._id}
                    content={message.content}
                    sender={message.sender}
                    createdAt={message.createdAt}
                    type={message.type}
                />
            )
        })
    }
    const renderDays = (): JSX.Element[] => {
        
        return newMessages.map((newMessage, index: number) => {
            console.log(newMessage.today)

            const dateText: string = newMessage.today ? "Aujourd'hui" : newMessage.date;
            return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    <Day date={dateText} />
                    {renderMessages(newMessage)}
                </div>
            )
        })
    }
    return (
        <StyledMessageBox>
            <div className="chat__messages-box">
                <FlipMove className="chat__messages-box-flipmove">
                    {renderDays()}
                </FlipMove>
            </div>
        </StyledMessageBox>
    )
}
export default MessageBox;

