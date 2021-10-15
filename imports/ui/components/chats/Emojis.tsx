import React from 'react';
import Picker from 'emoji-picker-react';
import StyledEmojis from '../../elements/chats/StyledEmojis';
import { MessageType } from '../../../api/models';

const Emojis = (props: any) => {
    const { emojisVisible, onUpload } = props;

    const onEmojiClick = (event, emojiObject) => {
// .unified est le code de l'émoji sélectionné
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