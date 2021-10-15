import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Chat, MessageType } from '../../../api/models';
import StyledMessagesList from '../../elements/messages/StyledMessagesList';
import MessageItem from './MessageItem';
import moment from 'moment';


const MessagesList = (props: any): JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;
    const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
  

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
                        onChatClick={onChatClick}
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