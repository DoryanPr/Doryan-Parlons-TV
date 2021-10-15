import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessages from '../../elements/chats/StyledMessages';
import Avatar from '../Avatar';
import MessageBox from './MessageBox';
import MessageEdit from './MessageEdit';

const Messages = (props: any): JSX.Element => {  
    
    return (
        <StyledMessages>
            <div className="chat__messages">
                <MessageBox messages={props.messages} />
                <MessageEdit
                    onSend={props.handleSend}
                />
            </div>
        </StyledMessages>
    )
}

export default Messages;