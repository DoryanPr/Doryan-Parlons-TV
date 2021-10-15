import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import moment from 'moment';
import StyledMessageBox from '../elements/StyledMessageBox';
import Day from './Day';
import MessageText from './MessageText'; 


let isEven: boolean = false;
const format: string = "D MMM Y"

const MessageBox = (props: any): JSX.Element => {
    const { messages } = props;
    // messages est un tableau
    messages.forEach(message => {
        if (!message.senderId) {
            message.ownership = !!message.ownership === isEven ? 'mine' : 'other';
            isEven = !isEven;
            return message;
        } else {
            message.ownership = message.senderId === Meteor.userId() ? 'mine' : 'other'
            return message;
        }
    });
   // console.log('message avec ownership', messages);

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


    // console.log('newMessages', newMessages);
    const renderMessages = (newMessage:any):JSX.Element[] => {
        return newMessage.groupedMessages.map(message => {
            const msgClass: string = `message message--${message.ownership}`;
            return (
                <MessageText 
                    key={message._id}
                    msgClass={msgClass}
                    content={message.content}
                    ownership={message.ownership}
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
            {renderDays()}
            <div>
                ref
            </div>
        </StyledMessageBox>
    )
}

export default MessageBox;