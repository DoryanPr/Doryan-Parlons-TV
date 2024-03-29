import React from 'react';

import StyledUserItem from '../elements/StyledUserItem';
import Avatar from './Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture, actu } = props;
    return (
        <StyledUserItem>
            <Avatar avatar_url={picture} />
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