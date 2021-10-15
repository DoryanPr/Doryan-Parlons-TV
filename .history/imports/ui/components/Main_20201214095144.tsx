import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { chatsCollection } from '../../api/chats';

const Main = (props: any): JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.all');
        console.log('chats', ChatsCollection.find().fetch() )
    })
    return (
        <StyledMain>
            <Left />
            <Right right />
        </StyledMain>
    )
}

export default Main;