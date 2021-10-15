import React from 'react';


const RightMessages = (props: any): JSX.Element => {
    const { right, messageVisible, selectedChat } = props;
 
    return (
        <StyledRightM>
            
                <MessageView
                    {...props}
                />
           
        </StyledRightM>
    )
}

export default RightMessages;