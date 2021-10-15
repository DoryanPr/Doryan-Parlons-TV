import React from 'react';

import StyleRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';

const messageText:string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat } = props;
    return (
        <StyleRight>
            {messageVisible ? (
                <MessageView selectedChat={selectedChat} />
            ) : (
                <RightImg right={right} messageText={messageText}/>     
                )}
            <st
        </StyleRight>
    )
}

export default Right;