import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
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