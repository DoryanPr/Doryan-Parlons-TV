import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import 
import StyledMessageBox from '../elements/StyledMessageBox';



let isEven:boolean = false;

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
    const groupedMessages:any = _.groupBy(messages, message => {
        return message.createdAt;
    })
    console.log('groupedMessages', groupedMessages);

    return (
        <StyledMessageBox>
            Message Box

        </StyledMessageBox>
    )
}

export default MessageBox;