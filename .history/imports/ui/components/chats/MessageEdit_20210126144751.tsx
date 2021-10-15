import React from 'react';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';

const MessageEdit = (props: any): JSX.Element => {
    const handleSend = (content: string, type: MessageType): void => {
        const message: Message = {
            chatId: selectedChat._id,
            content,
            createdAt: moment().toDate(),
            senderId: Meteor.userId(),
            type,
            read: false
        }
    return (
        <StyledMessageEdit>
            <div className="chat__messages-edit">
                <div className="chat__messages-edit-smileys">
                    <i className="fas fa-smile"></i>
                </div>
                <div className="chat__messages-edit-gif">GIF</div>
                <div className="chat__messages-edit-picture">
                    <i className="fas fa-camera"></i>
                </div>
                <input type="text" className="chat__messages-edit-input" />
                <button className="chat__messages-edit-send">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;