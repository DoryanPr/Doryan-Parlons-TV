import React from 'react';
import StyledRightMessages from '../../elements/messages/StyledRightMessages';
import MessageView from '../chats/MessageView';
import MessagesList from './MessagesList';


const RightMessages = (props: any): JSX.Element => {
    const { handleChatClick, messageVisible, selectedChat, onChatClick, chats} = props;
  console.log
    return (
        <StyledRightMessages>
            {messageVisible ? (
                <MessageView
                    {...props}
                />
            ) : (
                    <MessagesList
                        messageVisible={messageVisible}
                        chats={chats}
                        onChatClick={onChatClick}
                        selectedChat={selectedChat}
                    />
            )}
        </StyledRightMessages>
    )
}

export default RightMessages;