import React from 'react';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';

const MessageEdit = (props: any): JSX.Element => {

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
                <input type="text" className="chat__messages-edit-input"
                    value={inputValue}
                    onChange={handleChange}/>
                <button className="chat__messages-edit-send">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;