import React from 'react';
import HeaderBody from './HeaderBody';
import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';
import { Chat, Message, MessageType } from '../../api/models';
import Slideshow from './Slider';
import MultipleItems from './Slider';
import ImageSlider from './Slider';

const messageText: string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat, onAvatarClick, OPVisible } = props;
    //const selected: Chat = props.selectedChat;
    //console.log(selectedChat);
    //selectedChat={selectedChat} dans <MessageView
    return (
        <StyledRight OPVisible={OPVisible}>
            <HeaderBody />
            <ImageSliderm />
        </StyledRight>
    )
}

export default Right;