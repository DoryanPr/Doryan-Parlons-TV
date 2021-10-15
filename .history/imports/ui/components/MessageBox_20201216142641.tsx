import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import moment from 'moment';
import Day from './Day';
import StyledMessageBox from '../elements/StyledMessageBox';



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
    console.log('message avec ownership', messages);

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
    const renderDays = (): JSX.Element[] => {
        return newMessages.map((newMessage, index: number) => {
            const dateText:string = newMessage.today ? 'Aujourd\'hui'
            return (
                <div key={index}>
                    <Day date={newMessage.date} />
                </div>
            )
        })
    }
    return (
        <StyledMessageBox>
            {renderDays()}
        </StyledMessageBox>
    )
}

export default MessageBox;