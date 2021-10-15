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
        // console.log(user.username)
        return user.username.toUpperCase()[0];
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
                <UserItem
                    key={user._id}
                    id={user._id}
                    actu={user.profile.actu}
                    username={user.username}
                    picture={user.profile.picture}
                    onUserItemClick={props.onUserItemClick}
                />
            )
        });
    }
/*
    const renderLetters = (): JSX.Element[] => {
        return newUsers.map((newUser, i: number) => {
            return (
                <React.Fragment key={i}>
                    <div className="letter">
                        {newUser.letter}
                    </div>
                    {renderUserItem(newUser.groupedUsers)}
                </React.Fragment>
            )
        })
    }
    return (
        <StyledUsersList>
            {renderLetters()}

        </StyledUsersList>
    )*/
}

export default withTracker(() => {
    return {
        // me renvoi tous les id utilisateurs diférent du mien
        users: Meteor.users.find({
            _id: {
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
