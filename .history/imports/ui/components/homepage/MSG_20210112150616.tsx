import React from 'react';
import FontAwesome from 'react-fontawesome';


/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

/* Components */
import { Chat } from '../../api/models';

const Msg = (props: any): JSX.Element => {

    const { chats, onChatClick, selectedChat } = props;
    const renderChats = (): JSX.Element[] => {
        return chats.sort((a: Chat, b: Chat) => {
            return b.lastMessage.createdAt.getTime() - a.lastMessage.createdAt.getTime();

        })
            .map((chat: Chat) => {
                const active: boolean = selectedChat._id === chat._id;
                return (
                    <ChatItem
                        key={chat._id}
                        {...chat}
                        onChatClick={onChatClick}
                        active={active}
                    />
                )
            })
    }

    return (
        <a href="/chats" className="msg-link" >
            <FontAwesome name="envelope" classname="msg-icon" />
            Mes messages
        </a>
    )
}

export default Msg;