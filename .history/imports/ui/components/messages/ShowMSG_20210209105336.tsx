import React from 'react';
import { Meteor } from 'meteor/meteor';
import HeaderBody from '../homepage/HeaderBody';
import StyledShowMSG from '../../elements/homepage/StyledShowMSG';
import MessagesList from './MessagesList';
import moment from 'moment';
import { Chat, MessageType } from '../../../api/models';
import { ChatsCollection } from '../../../api/chats';
import _ from 'lodash';



const ShowMSG = (props: any): JSX.Element => {


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
            
                    chats={props.chats}
                    onChatClick={handleChatClick}
                    selectedChat={selectedChat}
                />
            </div>
        </StyledShowMSG>
    )
}

export default ShowMSG;