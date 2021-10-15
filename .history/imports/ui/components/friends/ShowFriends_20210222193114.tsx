import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import StyledShowFriends from '../../elements/friends/StyledShowFriends';
import HeaderBody from '../homepage/HeaderBody';
import UsersList from './UsersList';
import { User } from '../../../api/models';
import { withTracker } from 'meteor/react-meteor-data';
import NoConnected from './NoConnected';
import StyledNoConnected from '../../elements/friends/StyledNoConnected';




const ShowFriends = (props: any): JSX.Element => {

    const [pattern, setPattern] = React.useState<string>("");
    const [users2, setUsers] = React.useState<User[]>([]);

    const handleUSearch = (pattern: string): void => {
        setPattern(pattern);
        setUsers(Meteor.users.find({
            _id: { $ne: Meteor.userId() },
            "profile.name": { $regex: pattern, $options: 'i' }
        }, {
            sort: {
                "profile.name": 1
            }
        }).fetch());
    }

    const updateFriend = (_id: string, friends: Array<string>): void => {

        console.log(_id);
        console.log(friends);

        Meteor.call('user.update', { _id: _id, friends: friends }, (err, id) => {
            if (err) {
                console.log(err, 'erreur user.update')
            } else {
                console.log(id, 'resultat')
            }
        })
    }

    const removeFriend = (_id: string, friends: Array<string>): void => {
        console.log(_id, " remove id ");
        console.log(friends, " remove friend");
        Meteor.call('user.update', { _id: _id, friends: friends }, (err, id) => {
            if (err) {
                console.log(err, 'erreur user.update')
            } else {
                console.log(id, 'resultat')
            }
        })

    }

    return (

        Meteor.user() == null ? (
            <StyledNoConnected>
                <NoConnected />
            </StyledNoConnected>
        ) : (
                <StyledShowFriends>
                    <HeaderBody
                        onSearch={handleUSearch}
                    />
                    <UsersList
                        pattern={pattern}
                        users2={users2}
                        onAddFriend={updateFriend}
                    // friends={friends}
                    />
                </StyledShowFriends >
            )
    )
}
export default withTracker(() => {

    Meteor.subscribe('user.update');
    return {}

})(ShowFriends)
