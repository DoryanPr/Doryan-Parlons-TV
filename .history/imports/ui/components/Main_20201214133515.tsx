import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { findChat } from '../../api/helpers';

const Main = (props: any): JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.mine');
        console.log('chats', findChat());
    })
    return (
        <StyledMain>
            <Left chats={findChats()/>
            <Right right />
        </StyledMain>
    )
}

export default Main;