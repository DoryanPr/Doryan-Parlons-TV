import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
    
import StyledUsersList from '../elements/StyledUsersList';

const UsersList = (props: any): JSX.Element => {
    return (
        <StyledUsersList>
            User list

        </StyledUsersList>
    )
}

export default withTracker(() => {
    return 
})UsersList;
