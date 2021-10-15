import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessages from '../../elements/chats/StyledMessages';
import Avatar from '../Avatar';
import MessageBox from './MessageBox';
import MessageEdit from './MessageEdit';

const Messages = (props: any): JSX.Element => {  
    console.log(props);
    return (
        <StyledMessages>
            <div className="chat__messages">
                <FlipMove>
                <MessageBox messages={props.messages} />

                </FlipMove>
                <MessageEdit
                    onSend={props.onSend}
                />
            </div>
        </StyledMessages>
    )
}

export default Messages;