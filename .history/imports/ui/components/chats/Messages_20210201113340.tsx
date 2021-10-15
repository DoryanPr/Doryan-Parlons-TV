import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Message, MessageType } from '../../../api/models';
import StyledMessages from '../../elements/chats/StyledMessages';
import Avatar from '../Avatar';
import MessageBox from './MessageBox';
import MessageEdit from './MessageEdit';
import { handleSend } from '../'

const Messages = (props: any): JSX.Element => {  
    const { onUpload } = props;
    return (
        <StyledMessages>
            <div className="chat__messages">
                <MessageBox messages={props.messages} />

                <MessageEdit
                    onSend={props.onSend}
                    onUpload={handleSend()}
                />
            </div>
        </StyledMessages>
    )
}

export default Messages;