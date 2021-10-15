import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
    
import StyledUsersList from '../elements/StyledUsersList';
import { Meteor } from 'meteor/meteor';

const UsersList = (props: any): JSX.Element => {
    return (
        <StyledUsersList>
            User list

        </StyledUsersList>
    )
}

export default withTracker(() => {
    return {
        users: Meteor.
    }
})UsersList;
