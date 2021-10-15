import React from 'react';

import StyledUserItem from '../elements/StyledUserItem';
import Avatar from './Avatar';

const UserItem = (props: any): JSX.Element => {
    const { picture } = props;
    return (
        <StyledUserItem>
            <Avatar avatar_url={picture} />
        </StyledUserItem>
    )
}

export default UserItem