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
        setUsers(Meteor.chats.find({
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