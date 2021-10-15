import React from 'react';
import HeaderBody from './HeaderBody';
import RightImg from '../RightImg';
import MessageView from '../MessageView';
import { Chat, Message, MessageType } from '../../../api/models';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import ChannelSlider from './ChannelSlider';
import StyledRight from '../../elements/homepage/StyledRight';
import StyledCards from '../../elements/StyledCards';
import StyledChannelCard from '../../elements/homepage/StyledChannelCard';
import StyledChannelSlider from '../../elements/homepage/StyledChannelSlider';
import StyledSlider from '../../elements/homepage/StyledSliders';


const messageText: string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat, onAvatarClick, OPVisible } = props;

    return (
        <StyledRight OPVisible={OPVisible}>
            <Container>
                <HeaderBody />
                <StyledChannelSlider>
                    <StyledSlider>
                        <ChannelSlider />
                    </StyledSlider>
                </StyledChannelSlider>
                <StyledCards>
                    <StyledChannelCard>
                        <Cards />
                    </StyledChannelCard>
                </StyledCards>
            </Container>
        </StyledRight>
    )
}

export default Right;