
import React from 'react';
import styled from 'styled-components';
import StyledMenu from '../../elements/layout/StyledMenu';
import StyledHome from '../../elements/homepage/StyledHome';
import StyledAvatar from '../../elements/homepage/StyledAvatar';
import StyledMyFriends from '../../elements/homepage/StyledMyFriends';
import Home from '../homepage/Home';
import MyFriends from '../homepage/MyFriends';
import StyledMSG from '../../elements/homepage/StyledMSG';
import Msg from '../homepage/MSG';
import Avatar from './Avatar';
import { bool, func } from 'prop-types';

import { Meteor } from 'meteor/meteor'

const Menu = () => {
    const userId = Meteor.userId();

    const logout = () => {
        Meteor.logout()
        location.href = "/"
    }

    return (
        <StyledMenu >
            <img className="menu-logo" src="/images/logo.png" alt="Logo ParlonsTV" />
            <StyledHome>
                <Home />
            </StyledHome>
            <StyledMyFriends>
                <MyFriends />
            </StyledMyFriends>
            <StyledMSG>
                <Msg />
            </StyledMSG>
            {Meteor.user() ?
                (<StyledAvatar>
                    <a href="/profile" className="profile-link" >
                        <Avatar avatar_url={Meteor.user().profile.picture}>
                        </Avatar>
                    </a>
                </StyledAvatar>) : (
                    <div></div>
                )
            }
            {userId ? (
                <a href="#" onClick={logout}>Se déconnecter</a>
            ) : (
                    <a href="/sign-in">Se connecter</a>
                )}
        </StyledMenu>
    )
}

export default Menu;