import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Message, MessageType } from '../../../api/models';
import StyledMessages from '../../elements/chats/StyledMessages';
import Avatar from '../../components/old_version/Avatar';
import MessageBox from './MessageBox';
import MessageEdit from './MessageEdit';

const Messages = (props: any): JSX.Element => {  
    const {}
    return (
        <StyledMessages>
            <div className="chat__messages">
                <MessageBox messages={props.messages} />

                <MessageEdit
                    onSend={props.onSend}
                    onUpload={props.onUpload}
                    gifVisible={gifVisible}
                />
            </div>
        </StyledMessages>
    )
}

export default Messages;