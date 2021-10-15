import React from 'react';


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