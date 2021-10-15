import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';
import Header from './Header';

const icons = [
    {
        name: "",
        func: () => {}
    },
    {
        name: "",
        func: () => { }
    },
    {
        name: "",
        func: () => { }
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
                        <div className="OPH--heading"></div>
                    </Header>
                </>
            ) : null}
        </StyledOtherProfile>
    )
}

export default OtherProfile;