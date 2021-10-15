import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import StyledShowFriends from '../../elements/friends/StyledShowFriends';
import HeaderBody from '../homepage/HeaderBody';
import UsersList from './UsersList';
import { User } from '../../../api/models';




const ShowFriends = (props: any): JSX.Element => {
/*
    const [UListVisible, setUListVisible] = React.useState<boolean>(false);
    const [LSVisible, setLSVisible] = React.useState<boolean>(false);

    const renderLSComponents = (): JSX.Element => {
        if (UListVisible) {
            return (
                <>
                    <LSHeader onLSClose={toggleLS} title="Nouvelle Discussion" />

    const [pattern, setPattern] = React.useState<string>("");
    const [users2, setUsers] = React.useState<User[]>([]);

    const handleUSearch = (pattern: string): void => {
        setPattern(pattern);
        setUsers(Meteor.users.find({
            _id: { $ne: Meteor.userId() },
            username: { $regex: pattern, $options: 'i' }
        }, {
            sort: {
                username: 1
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