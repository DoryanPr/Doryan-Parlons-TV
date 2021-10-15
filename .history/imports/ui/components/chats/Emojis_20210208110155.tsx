import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Emojis = () => {
    const [chosenEmoji, setChosenEmoji] = ruseState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                    <span>No emoji Chosen</span>
                )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default Emojis;