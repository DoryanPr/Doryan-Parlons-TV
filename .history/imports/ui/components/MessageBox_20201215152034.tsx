import React from 'react';

import StyledMessageBox from '../elements/StyledMessageBox';


let isEven: bollean = false;

const MessageBox = (props: any): JSX.Element => {
    const { messages } = props;
    console.log('messages', messages)
    messages.forEach(message => {
        if (!message.senderId) {
            message.ownerShip
        } else {

        }
    })
    return (
        <StyledMessageBox>
            Message Box

        </StyledMessageBox>
    )
}

export default MessageBox;