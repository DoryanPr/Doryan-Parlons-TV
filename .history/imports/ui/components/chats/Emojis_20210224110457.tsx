import React from 'react';
import Picker from 'emoji-picker-react';
import StyledEmojis from '../../elements/chats/StyledEmojis';
import { MessageType } from '../../../api/models';

const Emojis = (props: any) => {

    const { emojisVisible, onUpload } = props;
// .unified est le code de d'authentification de l'émoji
    const onEmojiClick = (emojiObject) => {
        console.log(emojiObject.unified);
        onUpload(emojiObject.unified,
             MessageType.EMOJI)
    };

    return (
        <StyledEmojis emojisVisible={emojisVisible}>
            <div>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </StyledEmojis>
    );
};

export default Emojis;