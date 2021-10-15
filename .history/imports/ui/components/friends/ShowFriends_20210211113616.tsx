import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import StyledShowFriends from '../../elements/friends/StyledShowFriends';
import HeaderBody from '../homepage/HeaderBody';




const ShowFriends = (props: any): JSX.Element => {
    
    return (
        <StyledShowFriends>
            <HeaderBody
             //onSearch={handleUSearch}
            />
            <Users

        </StyledShowFriends>
    )
}
export default ShowFriends;