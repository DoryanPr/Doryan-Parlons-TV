import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

import StyledUsersList from '../elements/StyledUsersList';
import { User } from '../../api/models';
import UserItem from './UserItem';

const UsersList = (props: any): JSX.Element => {
    const users: User[] = props.users;
    const groupedUsers: string[] = _.groupBy(users, (user: User) => {
        return user.username.toUpperCase()[0];
    });
    const newUsers: any[] = Object.keys(groupedUsers)
        .map(letter => {
            return {
                letter,
                groupedUsers: groupedUsers[letter]
            }
        });
    const renderLetters = ()
    return (
        <StyledUsersList>
           {renderLetters()}

        </StyledUsersList>
    )
}

export default withTracker(() => {
    return {
        // me renvoi tous les id utilisateurs diférent du mien
        users: Meteor.users.find({_id: {
                //$ne = not equal
                $ne: Meteor.userId()
        }
        }, {
                sort: {
                    username: 1
                }
            }).fetch()
    }
})(UsersList);
