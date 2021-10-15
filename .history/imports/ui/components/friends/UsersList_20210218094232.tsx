import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { User } from '../../../api/models';
import UserItem from './UserItem';
import StyledUsersList from '../../elements/friends/StyledUsersList';

const UsersList = (props: any): JSX.Element => {
    const users: User[] = props.users;
    const groupedUsers: string[] = _.groupBy(users, (user: User) => {
        return user.profile.name.toUpperCase()[0];
    });
    const newUsers: any[] = Object.keys(groupedUsers)
        .map(letter => {
            return {
                letter,
                groupedUsers: groupedUsers[letter]
            }
        });

    const renderUserItem = (userList: User[]): JSX.Element[] => {
        return userList.map(user => {
            return (
                {
                    Meteor.user() = null ? (
                        <no
                    ):
                        (
                            <UserItem
                            key = {user._id}
                            id = { user._id }
            actu = { user.profile.actu }
            username = { user.profile.name }
            picture = { user.profile.picture }
            onAddFriend = { props.onAddFriend }
            user = { user }
                            )
            />
                }
            )
        });
    }

const renderUsersList = (): JSX.Element[] => {
    return newUsers.map((newUser, i: number) => {
        return (
            <React.Fragment key={i}>
                {renderUserItem(newUser.groupedUsers)}
            </React.Fragment>
        )
    })
}
return (
    <StyledUsersList>
        {renderUsersList()}

    </StyledUsersList>
)
}

export default withTracker((props: any) => {
    console.log(Meteor.user().profile.friends);

    return {
        // me renvoi tous les id utilisateurs diférent du mien
        users: props.pattern === "" ? Meteor.users.find({
            _id: {
                $in: Meteor.user().profile.friends ? Meteor.user().profile.friends : []
                //$ne = not equal / non équivalent
                // $ne: Meteor.userId()
            }
        }, {
            sort: {
                "profile.name": 1
            }
        }).fetch() : props.users2
    }
})(UsersList);
