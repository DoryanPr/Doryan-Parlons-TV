import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';



const RightMessages = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat, onAvatarClick } = props;
 
    return (
        <StyledRight OPVisible={OPVisible}>
            
                <MessageView
                    //Peut etre un soucis avec onAvatarClick et {...props}
                    onAvatarClick={onAvatarClick}
                    
                    {...props}
                />
           
        </StyledRight>
    )
}

export default RightMessages;