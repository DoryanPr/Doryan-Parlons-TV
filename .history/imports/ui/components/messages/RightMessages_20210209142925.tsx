import React from 'react';
import MessageView from '../chats/MessageView';


const RightMessages = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat } = props;
 
    return (
        <StyledRightMessages>
            
                <MessageView
                    {...props}
                />
           
        </StyledRightMessages>
    )
}

export default RightMessages;