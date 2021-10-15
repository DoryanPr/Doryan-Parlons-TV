import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';
import { Col, Row } from 'react-bootstrap';

import Avatar from '../layout/Avatar';
import { Meteor } from 'meteor/meteor';

const UserItem = (props: any): JSX.Element => {
    const { user, picture, actu, username, id, onUserItemClick } = props;

    const handleClick = () => {
        return (
            <a href="/profile" className="profile-link" onAddFriend>
            </a>
        )
    }

    const onAddFriend = () => {

        props.onAddFriend(
            Meteor.userId(), 
            Meteor.user().profile.friends ? Meteor.user().profile.friends.concat([ id ]) : [ id ]
        );

        props.onAddFriend(
            id,
            user.profile.friends? user.profile.friends.push(Meteor.userId()) : [ Meteor.userId() ] 
        );

       }

    return (
        <StyledUserItem>
            <Avatar large avatar_url={picture} />
            <Col>
                <div className="chat--content-container">
                    <a
                        href="/profile"
                        className="chat--content-container-line1"
                        onClick={handleClick}
                    >
                        <span className="chat--content-container-title">
                            {username}
                        </span>
                    </a>
                    <div className="chat--content-container-line2">
                        <span className="chat--content-container-message">
                            {actu}
                        </span>
                    </div>
                </div>
            </Col>
            <Col>
                <button className="chat--content-add-friend" onClick={onAddFriend}>
                    <i className="fas fa-user-plus"></i>
                </button>
                <button className="chat--content-send-message">
                    <i className="far fa-comments"></i>
                </button>
            </Col>
        </StyledUserItem>
    )
}

export default UserItem;