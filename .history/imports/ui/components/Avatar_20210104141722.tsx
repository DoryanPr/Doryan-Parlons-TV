import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props:any):JSX.Element => {
    return (
        <StyledAvatar>
            <img 
                src={props.avatar_url}
                alt="avatar"
                className="avatar--img"
                onClick
            />
        </StyledAvatar>

    )
}

export default Avatar;