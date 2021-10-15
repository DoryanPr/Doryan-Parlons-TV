import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props: any): JSX.Element => {
    const renderOverlay = ()
    return (
        <StyledAvatar big={props.big}>
            <img 
                src={props.avatar_url}
                alt="avatar"
                className="avatar--img"
                onClick={props.onAvatarClick}
            />
            {renderOverlay()}
        </StyledAvatar>

    )
}

export default Avatar;