import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { ChatsCollection } from '../../'

const Main = (props: any): JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.all');
        console.log('chats', )
    })
    return (
        <StyledMain>
            <Left />
            <Right right />
        </StyledMain>
    )
}

export default Main;