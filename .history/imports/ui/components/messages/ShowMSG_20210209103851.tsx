import React from 'react';
import { Meteor } from 'meteor/meteor';
import HeaderBody from '../homepage/HeaderBody';
import Cards from '../homepage/Cards';
import ChannelSlider from '../homepage/ChannelSlider';
import Footer from '../homepage/Footer';

import StyledCards from '../../elements/homepage/StyledCards';
import StyledChannelCard from '../../elements/homepage/StyledChannelCard';
import StyledChannelSlider from '../../elements/homepage/StyledChannelSlider';
import StyledSlider from '../../elements/homepage/StyledSliders';
import StyledShow from '../../elements/homepage/StyledShow';
import StyledShowMSG from '../../elements/homepage/StyledShowMSG';
import MessagesList from './MessagesList';



const ShowMSG = (props: any): JSX.Element => {
    return (
        <StyledShowMSG>
            <div className="homepage-show">
                <HeaderBody
                //onSearch={handleCSearch}
                />
                <MessagesList
                
                    chats={chats}
                    onChatClick={onChatClick}
                    selectedChat={selectedChat}/>
            </div>
        </StyledShowMSG>
    )
}

export default ShowMSG;