import React from 'react';


const ChatAvatar = (props: any): JSX.Element => {

    return (
        <StyledChatAvatar large={props.large} big={props.big}>
            <img
                src={props.avatar_url}
                alt="avatar"
                className="avatar--img"
                onClick={props.onAvatarClick}
                onMouseEnter={showOverlay}
            />
            
        </StyledChatAvatar>

    )
}

export default ChatAvatar;