import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import StyledShowFriends from '../../elements/friends/StyledShowFriends';
import HeaderBody from '../homepage/HeaderBody';
import UsersList from './UsersList';
import { User } from '../../../api/models';




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

    const handleAddFriend = () => {

    }

    const selectedUser: User = props.selectedUser;

    const addFriend = (_id: string, friends: Array<string>): void => {
        const friendUpload: User = {
            _id: selectedUser._id
        }
        Meteor.call('user.update', friendUpload, (err, id) => {
            if (err) {
                console.log(err, 'erreur user.update')
            } else {
                console.log(id, 'resultat')
            }
        })
    }

    return (
        <StyledShowFriends>
            <HeaderBody
                onSearch={handleUSearch}
            />
            <UsersList
                pattern={pattern}
                users2={users2}
            />

        </StyledShowFriends>
    )
}
export default ShowFriends;