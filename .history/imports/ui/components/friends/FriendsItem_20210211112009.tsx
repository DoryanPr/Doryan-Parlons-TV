import React from 'react';

import StyledUserItem from '../elements/StyledFriendsItem';
import Avatar from '../../components/layout/Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu, username, id, onUserItemClick } = props;
    return (
        <StyledUserItem onClick={() => onUserItemClick(id, username, picture)}>
            <Avatar large avatar_url={picture} />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">
                        {username}
                    </span>
                </div>
                <div className="content--line1">
                    <span className="content--message">
                        {actu}
                    </span>
                </div>
            </div>
        </StyledUserItem>
    )
}

export default UserItem;