import React from 'react';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';

const MessageEdit = (props: any): JSX.Element => {

    return (
        <StyledMessageEdit>
            <div className="chat__messages-edit">
                <div className="chat__messages-edit-smileys">
                    
                </div>
                <div className="chat__messages-edit-gif">GIF</div>
                <div className="chat__messages-edit-picture">Picture</div>
                <input type="text" className="chat__messages-edit-input" />
                <button className="chat__messages-edit-send">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;