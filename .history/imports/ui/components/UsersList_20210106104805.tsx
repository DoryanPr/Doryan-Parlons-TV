import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
    
import StyledUsersList from '../elements/StyledUsersList';

const UsersList = (props: any): JSX.Element => {
    return (
        <StyledUsersList>
            User list

        </StyledUsersList>
    )
}

export default withTracker(() => {
    return {
        // me renvoi tous les id utilisateurs diférent du mien
        users: Meteor.users.find({
            _id: {
                //$ne = not equal
                $ne: Meteor.userId()
            }
        })
    }
})(UsersList);
