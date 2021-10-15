import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Message, MessageType, User } from '../../../api/models';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import MessageBoxItem from './MessageBoxItem';
import _ from 'lodash';
import MessageImage from './MessageImage';
import Day from './Day';


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
    const renderMessages = (newMessage: any): JSX.Element[] => {
        // console.log('messages', newMessage.groupedMessages);

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
                <FlipMove>
                    {renderDays()}
                </FlipMove>
            </div>
        </StyledMessageBox>

    )


























    /*
        return (
            <StyledMessageBox>
                <FlipMove>
                    <div className="chat__messages-box">
                        {messages.map((message: Message, i: number) => {
                            return <MessageBoxItem key={message._id} {...message} />
                        })}
                    </div>
                </FlipMove>
            </StyledMessageBox>
    
        )
        */
}

export default MessageBox;

