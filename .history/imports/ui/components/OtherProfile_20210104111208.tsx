import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';
import Header from './Header';
import Avatar from './Avatar';
import Actu from './Actu';

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
                        <div className="OPH--heading">
                            <FontAwesome
                                name="times"
                                className="iconOtherProfile"
                            />
                            <span className="OPH--title">Infos</span>
                        </div>
                    </Header>
                    <div className="__scroll">
                        <div className="OP--imageContainer">
                            <Avatar avatar_url={otherUser.profile.picture} />
                            <div className="OPIC--textContainer">
                                <span className="OPIC--title">{otherUser.username}</span>
                                <span className="OPIC--sbTitle">en ligne</span>
                            </div>
                        </div>
                        <Actu actu={otherUser.profile.actu} phone={ }/>
                    </div>
                </>
            ) : null}
        </StyledOtherProfile>
    )
}

export default OtherProfile;