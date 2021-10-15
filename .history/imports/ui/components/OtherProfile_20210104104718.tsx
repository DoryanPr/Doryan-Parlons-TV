import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';


const OtherProfile = (props: any): JSX.Element => {
   
    const otherUser: User = findOtherUser(otherUserId);
    return (
        <StyledOtherProfile>


        </StyledOtherProfile>
    )
}

export default OtherProfile;