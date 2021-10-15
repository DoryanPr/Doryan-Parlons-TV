import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';

const OtherProfile = (props: any): JSX.Element => {
    const { otherUserId } = props;
    const otherUser: User = findOtherUser(otherUserId);
    return (
        <StyledOtherProfile>
            {otherUser ? (
                <>
                   
                    )}

        </StyledOtherProfile>
    )
}

export default OtherProfile;