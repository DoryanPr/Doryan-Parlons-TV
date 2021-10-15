import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';
import { uploadFile } from '../../../api/helpers';
import AppGIF from './GridGif';

const MessageEdit = (props: any): JSX.Element => {

    const [inputValue, setInputValue] = React.useState<string>("");
    const { onUpload } = props;

    const handleclick = (event): void => {
        if (inputValue) {
            console.log(event, "event");
            console.log(props);
            props.onSend(inputValue, MessageType.TEXT);
            setInputValue("");
        }
    }
    const onGifClick = (event) => {
        console.log(event, "event");
        return (
           AppGIF()
            )
       
    }


    const handleGifClick = (): void => {
        setGifVisible(!gifVisible);
    }
    return (
        <StyledMessageEdit>
            <div className="chat__messages-edit">
                <div className="chat__messages-edit-smileys">
                    <i className="fas fa-smile"></i>
                </div>
                <div onClick={onGifClick}
                    className="chat__messages-edit-gif"
                >GIF
                

                </div>
                <input
                    className="chat__messages-edit-picture"
                    type="file"
                    accept="image/*"
                    id="fileUpload"
                    onChange={(event) => onUpload("", MessageType.IMAGE, event.target.files[0])}>
                </input>
                <form action="#" onSubmit={handleclick}>
                    <input
                        type="text"
                        className="chat__messages-edit-input"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button className="chat__messages-edit-send" onClick={handleclick}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;