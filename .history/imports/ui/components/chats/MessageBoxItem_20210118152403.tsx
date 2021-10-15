import React from 'react';
import { Message } from '../../../api/models';
import StyledMessageBoxItem from '../../elements/chats/StyledMessageBoxItem';
import StyledMessageBox from '../../elements/old/StyledMessageBox';
import Avatar from '../Avatar';
import Moment from 'react-moment';

const MessageBoxItem = (props: Message): JSX.Element => {

    const { ownership, createdAt, content } = props;

    return (
        <StyledMessageBoxItem>
            <div className="chat__messages-box-item">
                {/* <ChatAvatar />*/}
                <div className="chat__messages-box-item-message">
                    <div className="">
                    <p className="chat__messages-box-item-message-name">{ownership}</p>
                    <p className="chat__messages-box-item-message-since">
                        <Moment format="HH:mm">
                            {createdAt}
                        </Moment>
                    </p>
                    </div>
                    <p className="chat__messages-box-item-message-content">{content}</p>
                </div>
            </div>
        </StyledMessageBoxItem>
    )
}

export default MessageBoxItem;