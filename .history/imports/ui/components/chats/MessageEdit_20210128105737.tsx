import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';

const MessageEdit = (props: any): JSX.Element => {
    const [inputValue, setInputValue] = React.useState<string>("");

    const handleclick = (event): void => {
        setInputValue("");
        if (iconName === "microphone") {
            return;
        }
        props.onSend(inputValue, MessageType.TEXT);
        setInputValue("");
        setIconName("microphone");
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
                <input
                    type="text"
                    className="chat__messages-edit-input"
                    value={inputValue}
                />
                <button className="chat__messages-edit-send" onClick={handleclick}>
                    
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;