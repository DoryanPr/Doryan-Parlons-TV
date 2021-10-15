import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';
import { Chat, Message, MessageType } from '../../api/models';

const messageText: string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const RightMessages = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat, onAvatarClick, OPVisible } = props;
    //const selected: Chat = props.selectedChat;
    //console.log(selectedChat);
    //selectedChat={selectedChat} dans <MessageView
    return (
        <StyledRight OPVisible={OPVisible}>
            {messageVisible ? (
                <MessageView
                    //Peut etre un soucis avec onAvatarClick et {...props}
                    onAvatarClick={onAvatarClick}
                    OPVisible={OPVisible}
                    {...props}
                />
            ) : (
                    <RightImg right={right} messageText={messageText} />
                )}
        </StyledRight>
    )
}

export default Right;