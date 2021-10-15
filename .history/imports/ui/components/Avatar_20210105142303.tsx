import React from 'react';
import FontAwesome from 'react-fontawesome';
import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props: any): JSX.Element => {
    const renderOverlay = (): JSX.Element => {
        return (
            <div
            className="avatar--overlay"
            >
                <FontAwesome name="camera" classname="overlay--icon"/>
            </div>
        )
    }
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