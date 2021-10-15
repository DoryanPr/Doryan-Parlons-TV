import React from 'react';
import HeaderBody from './HeaderBody';
import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';
import { Chat, Message, MessageType } from '../../api/models';
import Cards from './Cards';
import StyledCards from '../elements/StyledCards';


const messageText: string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat, onAvatarClick, OPVisible } = props;

    return (
        <StyledRight OPVisible={OPVisible}>
            <HeaderBody />
            
            <Cards />
        </StyledRight>
    )
}

export default Right;