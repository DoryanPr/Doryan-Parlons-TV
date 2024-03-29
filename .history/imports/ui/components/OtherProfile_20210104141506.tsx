import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';
import Header from './Header';
import Avatar from './Avatar';
import Actu from './Actu';
import ActuItem from './ActuItem';


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
    const { profile: { phone, picture, actu }, username } = otherUser;
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
                            <Avatar avatar_url={picture} />
                            <div className="OPIC--textContainer">
                                <span className="OPIC--title">{username}</span>
                                <span className="OPIC--sbTitle">en ligne</span>
                            </div>
                        </div>
                        <Actu actu={actu} phone={phone} />
                        <ActuItem iconName="ban" content="Bloquer"/>
                        <ActuItem iconName="thumbs-down" red content="Supprimer le contact" />
                        <ActuItem iconName="trash" red content="Supprimer la Discussion"/>

                    </div>
                </>
            ) : null}
        </StyledOtherProfile>
    )
}

export default OtherProfile;