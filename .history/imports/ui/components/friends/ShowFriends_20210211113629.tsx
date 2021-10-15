import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import StyledShowFriends from '../../elements/friends/StyledShowFriends';
import HeaderBody from '../homepage/HeaderBody';
import UsersList from './UsersList';




const ShowFriends = (props: any): JSX.Element => {

    return (
        <StyledShowFriends>
            <HeaderBody
            //onSearch={handleUSearch}
            />
            <UsersList />

        </StyledShowFriends>
    )
}
export default ShowFriends;