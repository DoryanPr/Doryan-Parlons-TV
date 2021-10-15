import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';
import { uploadFile } from '../../../api/helpers';
import AppGIF from './GridGif';
import StyledGridGif from '../../elements/chats/StyledGridGif';
import Icons from './Icons';
import GridGif from './GridGif';
import Picker from 'emoji-picker-react';

const MessageEdit = (props: any): JSX.Element => {

    // Permet de créer un state et d'afficher les icons lors du click
    const [gifVisible, setGifVisible] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>("");
    const { onUpload } = props;
    const [chosenEmoji, setChosenEmoji] = React.useState(null);

    const icons: any[] = [
        {
            name: "smile",
            className: "chat__messages-edit-smileys",
           // func: () => { },
           // onEmojiClick: (event, emojiObject) => {
            //    setChosenEmoji(emojiObject);
            }
        },
        {
            name: "paperclip",
            className: "chat__messages-edit-gif",
            func: () => { handleGifClick() },
            onChange: (event) => onUpload("", MessageType.IMAGE, event.target.files[0])
        },
        {
            name: "image",
            func: () => { },
            className: "chat__messages-edit-picture",
            type: "file",
            accept: "image/*",
            id: "fileUpload",
            onChange: (event) => onUpload("", MessageType.IMAGE, event.target.files[0])
        }
    ];

    ;

    const handleclick = (event): void => {
        if (inputValue) {
            console.log(event, "event");
            console.log(props);
            props.onSend(inputValue, MessageType.TEXT);
            setInputValue("");
        }
    }

    // Afficher la fenetre de GIF
    const handleGifClick = (): void => {
        setGifVisible(!gifVisible);

        console.log(gifVisible)
    }

    // Fermer la fenetre de GIF
    const handleClose = (): void => {
        setGifVisible(false);
    }


    return (
        <StyledMessageEdit>
            
            <GridGif gifVisible={gifVisible} onUpload={onUpload} />
            <div className="chat__messages-edit">
                <Icons icons={icons} />
                {/* <div className="chat__messages-edit-smileys">
                    <i className="fas fa-smile"></i>
                </div>
                <div
                    className="chat__messages-edit-gif"
                   
                >
                    GIF
                     <StyledGridGif>
                        <AppGIF />
                    </StyledGridGif>
                </div>
                <input
                    className="chat__messages-edit-picture"
                    type="file"
                    accept="image/*"
                    id="fileUpload"
                    onChange={(event) => onUpload("", MessageType.IMAGE, event.target.files[0])}>
                </input>
            */}

                <form className="chat_message-edit-form" action="#" onSubmit={handleclick}>
                    <input
                        type="text"
                        className="chat__messages-edit-form-input"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button className="chat__messages-edit-form-send" onClick={handleclick}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </StyledMessageEdit>
    )
}

export default MessageEdit;