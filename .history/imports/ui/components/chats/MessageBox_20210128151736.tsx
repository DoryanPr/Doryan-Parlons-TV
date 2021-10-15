import moment from 'moment';
import React from 'react';
import { Message, MessageType } from '../../../api/models';
import StyledMessageBox from '../../elements/chats/StyledMessageBox';
import Avatar from '../Avatar';
import MessageBoxItem from './MessageBoxItem';

const MessageBox = (props: any): JSX.Element => {

    const messages = props.messages;
    const messagesMap = ():JSX.Element[] => {}

    return (
        <StyledMessageBox>
            <div className="chat__messages-box">
                <FlipMove>
                </FlipMove>

                
            </div>
        </StyledMessageBox>

    )
}

export default MessageBox;