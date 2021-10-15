import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';
import { uploadFile, onChangeUpload } from '../../../api/helpers';

const MessageEdit = (props: any): JSX.Element => {
    const [inputValue, setInputValue] = React.useState<string>("");
    

    const { onUpload } = props;


    const handleclick = (event): void => {
        if (inputValue) {
            console.log(event, "event")
            console.log(props);
            props.onSend(inputValue, MessageType.TEXT);
            setInputValue("");
        }
    }

/*
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        fileInput = e.target.files[0];
        console.log('fileInput', fileInput);
        if (fileInput) {
            const fileReader: FileReader = new FileReader();
            fileReader.onload = function (e) {
                console.log('image', e.target.result);
                setSelectedImage(e.target.result);
            }
            fileReader.readAsDataURL(fileInput);
        }
    }
*/
    return (
        <StyledMessageEdit>
            <div className="chat__messages-edit">
                <div className="chat__messages-edit-smileys">
                    <i className="fas fa-smile"></i>
                </div>
                <div className="chat__messages-edit-gif">GIF</div>
                <input
                    className="chat__messages-edit-picture"
                    type="file"
                    accept="image/*"
                    id="fileUpload"
                    ref={fileInput}
                    onChange={() => onUpload("", MessageType.IMAGE)}>
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