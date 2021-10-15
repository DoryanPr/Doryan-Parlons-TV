import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';
import Header from './Header';

const icons = [
    {
        name:"fun"
    }
]
const OtherProfile = (props: any): JSX.Element => {
    const { otherUserId } = props;
    const otherUser: User = findOtherUser(otherUserId);
    return (
        <StyledOtherProfile>
            {otherUser ? (
                <>
                    <Header iconClass="greyIcon" icons={icons}>

                    </Header>
                </>
            ) : null}
        </StyledOtherProfile>
    )
}

export default OtherProfile;