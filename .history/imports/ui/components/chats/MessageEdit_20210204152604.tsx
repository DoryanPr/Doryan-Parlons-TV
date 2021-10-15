import React from 'react';
import { MessageType } from '../../../api/models';
import StyledMessageEdit from '../../elements/chats/StyledMessageEdit';
import { uploadFile } from '../../../api/helpers';
import AppGIF from './GridGif';
import StyledGridGif from '../../elements/chats/StyledGridGif';

const MessageEdit = (props: any): JSX.Element => {

    const [inputValue, setInputValue] = React.useState<string>("");
    const { onUpload, gifVisible } = props;
    // Permet de créer un state et d'afficher les icons lors du click sur l'icone paperclip
    const [gifVisible, setGifVisible] = React.useState<boolean>(false);
    const icons: any[] = [
        {
            name: "search",
            func: () => { }
        },
        {
            name: "paperclip",
            func: () => { handleGifClick() }
        },
        {
            name: "ellipsis-v",
            func: () => { }
        }
    ];

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
    }

    // Fermer la fenetre de GIF
    const handleClose = (): void => {
        setGifVisible(false);
    }


    return (
        <StyledMessageEdit>
            <div className="chat__messages-edit">
                <div className="chat__messages-edit-smileys">
                    <i className="fas fa-smile"></i>
                </div>
                <div onClick={gifVisible}
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