import React from 'react';

import StyledUserItem from '../elements/StyledUserItem';

const UserItem = (props: any): JSX.Element => {
    return (
        <StyledUserItem>
            <Avatar avatar_url={picture}</Avatar>
        </StyledUserItem>
    )
}