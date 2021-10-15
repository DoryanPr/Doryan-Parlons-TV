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
import moment from 'moment';
import { Chat, MessageType } from '../../../api/models';




const ShowMSG = (props: any): JSX.Element => {


    const { chats, onChatClick, OPVisible, picture } = props;
    const [LSVisible, setLSVisible] = React.useState<boolean>(false);
    const [UListVisible, setUListVisible] = React.useState<boolean>(false);
    const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
    const [selectedChat, setSelectedChat] = React.useState<Chat>({});

    const handleChatClick = (_id: string): void => {
        // console.log('selected chat before', selectedChat)
        if (!messageVisible) {
            setMessageVisible(true);
        }
        const newChat: Chat = _.find(props.chats, { _id })
        // console.log('selected chat after', newChat);
        if (newChat) {
            setSelectedChat(newChat);
        } else {
            const newChat: Chat = ChatsCollection.findOne(_id);
            setSelectedChat(newChat);
        }
    }

    const handleUIClick = (otherUserId: string, username: string, picture: string): void => {
        const chat: Chat = ChatsCollection.findOne({
            participants: {
                $all: [otherUserId, Meteor.userId()]
            }
        });
        console.log('chat', chat);
        if (chat) {
            handleChatClick(chat._id);
        } else {
            const chatId: string = ChatsCollection.insert({
                name: username,
                picture,
                participants: [otherUserId, Meteor.userId()],
                lastMessage: {
                    content: "",
                    createdAt: moment().toDate(),
                    type: MessageType.TEXT
                }
            })
            handleChatClick(chatId);

        }
    }

    return (
        <StyledShowMSG>
            <div className="homepage-show">
                <HeaderBody
                //onSearch={handleCSearch}
                />
                <MessagesList
            
                    chats={chats}
                    onChatClick={onChatClick}
                    selectedChat={selectedChat}
                />
            </div>
        </StyledShowMSG>
    )
}

export default ShowMSG;