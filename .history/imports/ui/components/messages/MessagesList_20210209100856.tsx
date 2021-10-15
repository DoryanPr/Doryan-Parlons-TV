import { Meteor } from 'meteor/meteor';
import React from 'react';
import { ChatsCollection } from '../../../api/chats';
import { Chat } from '../../../api/models';
import StyledMessagesList from '../../elements/messages/StyledMessagesList';
import MessageItem from './MessageItem';


const MessagesList = (props: any): JSX.Element => {
    //const { chats, onChatClick, selectedChat } = props;
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
                title: username,
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

    const renderMessages = (): JSX.Element[] => {
        return chats.sort((a: Chat, b: Chat) => {
            return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();

        })
            .map((chat: Chat) => {
                const active: boolean = selectedChat._id === chat._id;
                return (
                    <MessageItem
                        key={chat._id}
                        {...chat}
                        //onChatClick={onChatClick}
                        //active={active}
                    />
                )
            })
    }
    return (
        <StyledMessagesList>
            {renderMessages()}
        </StyledMessagesList>
    )
}

export default MessagesList;