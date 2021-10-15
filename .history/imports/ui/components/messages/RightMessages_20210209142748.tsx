import React from 'react';

import StyledRight from '../elements/StyledRightMessages';

import MessageView from './MessageView';



const RightMessages = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat } = props;
 
    return (
        <StyledRight>
            
                <MessageView
                    {...props}
                />
           
        </StyledRight>
    )
}

export default RightMessages;