import React from 'react';

import StyleRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';
import { Chat } from './models';


const messageText: string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    const { right, messageVisible } = props;
    const selectedChat: Chat = props.selectedChat;
    console.log(selectedChat);
    return (
        <StyleRight>
            {messageVisible ? (
                <MessageView
                    selectedChat={selectedChat} 
                />
            ) : (
                    <RightImg right={right} messageText={messageText} />
                )}
        </StyleRight>
    )
}

export default Right;