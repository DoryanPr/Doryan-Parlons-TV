import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';

const MessageEdit = (props: any): JSX.Element => {
    const [inputValue, setInputValue] = React.useState<string>("");

    const handleclick = (event): void => {
        if (inputValue) {
            console.log(props);
            props.onSend(inputValue, MessageType.TEXT);
            setInputValue("");
        }
    }


    /*
    const enter = {
        onClick: (e: Event): any => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("chat__messages-edit-send").click();
            }
        }
    }
    var input = document.getElementsByName("chat__messages-edit-input");

    const enter = (event): HTMLButtonElement => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementsByName("chat__messages-edit-send").click();
        }
    };
    */
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
                <form>
                    <input
                        type="text"
                        className="chat__messages-edit-input"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}

                    />
                <button className="chat__messages-edit-send" onClick={handleclick}>
                </form>

                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;