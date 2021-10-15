import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';

import Avatar from '../layout/Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu, username, id, onUserItemClick } = props;
    return (
        <StyledUserItem onClick={() => onUserItemClick(id, username, picture)}>
            <Avatar large avatar_url={picture} />
            <div className="chat--content-container">
                <div className="chat--content-container-line1">
                    <span className="chat--content-container-title">
                        {username}
                    </span>
                </div>
                <div className="content--line2">
                    <span className="content--message">
                        {actu}
                    </span>
                </div>
            </div>
        </StyledUserItem>
    )
}

export default UserItem;