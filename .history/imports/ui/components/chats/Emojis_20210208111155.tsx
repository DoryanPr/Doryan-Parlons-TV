import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Emojis = (props: any) => {
    const [chosenEmoji, setChosenEmoji] = React.useState(null);
    const { gifVisible } = props;
    const onEmojiClick = (event, emojiObject,) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <span>Vous avez sélectionné: {chosenEmoji.emoji}</span>
            ) : (
                    <span>Vous n'avez pas sélectionné d'emoji</span>
                )}
            <Picker gifVisible={props.gifVisible} onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default Emojis;