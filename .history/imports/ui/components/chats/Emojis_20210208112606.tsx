import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import StyledEmojis from '../../elements/chats/StyledEmojis';

const Emojis = (props: any) => {
    const [chosenEmoji, setChosenEmoji] = React.useState(null);
    const { emojisVisible } = props;
    
    const onEmojiClick = (event, emojiObject,) => {
        setChosenEmoji(emojiObject);
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