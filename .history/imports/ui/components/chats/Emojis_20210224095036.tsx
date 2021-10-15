import React from 'react';
import Picker from 'emoji-picker-react';
import StyledEmojis from '../../elements/chats/StyledEmojis';
import { MessageType } from '../../../api/models';

const Emojis = (props: any) => {
    
    const [chosenEmoji, setChosenEmoji] = React.useState(null);
    const { emojisVisible, onUpload } = props;

    const onEmojiClick = (emojiObject) => {
        onUpload(emojiObject.unified, MessageType.EMOJI)
    };

    return (
        <StyledEmojis emojisVisible={emojisVisible}>
            <div>
                {chosenEmoji ? (
                    <span>Vous avez sélectionné: {chosenEmoji.emoji}</span>
                ) : (
                        <span>Vous n'avez pas sélectionné d'emoji</span>
                    )}
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </StyledEmojis>
    );
};

export default Emojis;