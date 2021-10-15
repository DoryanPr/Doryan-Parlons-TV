import React from 'react';
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