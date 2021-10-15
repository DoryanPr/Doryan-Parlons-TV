import React from 'react';
import StyledUserItem from '../../elements/friends/StyledUserItem';
import { Col, Row } from 'react-bootstrap';

import Avatar from '../layout/Avatar';
import { Meteor } from 'meteor/meteor';
import StyledProfile from '../../elements/profile/StyledProfile';
import Profile from '../profile/Profile';
import { withTracker } from 'meteor/react-meteor-data';

import { ChatsCollection } from '../../../api/chats';

const UserItem = (props: any): JSX.Element => {
    const { user, picture, actu, username, id, myConversation, myFrien } = props;


    const onAddFriend = () => {
        props.onAddFriend(
            Meteor.userId(),
            Meteor.user().profile.friends ? Meteor.user().profile.friends.concat([id]) : [id]
        );

        props.onAddFriend(
            id,
            user.profile.friends ? user.profile.friends.concat([Meteor.userId()]) : [Meteor.userId()]
        );
    }

    const onMessage = () => {

        if (myConversation.length == 0) {

            const message = {
                participants: [Meteor.userId(), id],
                lastMessage: {}
            };

            Meteor.call('chats.insert', message, (err, res) => {
                if (res) {
                    window.location.pathname = "/profile-message/" + res;
                }
            });

        } else {
            window.location.pathname = "/profile-message/" + props.myConversation[0]._id;
        }
    }

    const handleClick = (props: any): JSX.Element => {
        return (
            <StyledProfile AddFriend={onAddFriend}>
                <Profile />
            </StyledProfile>
            /*<a href="/profile" className="profile-link" > 
            </a>*/
        )
    }

    return (
        <StyledUserItem>
            <Avatar large avatar_url={picture} />
            <Col>
                <div className="chat--content-container">
                    <a
                        href={"/profile/" + id}
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
                {myFriends ? (

                ) : (
                    
                )
                    
                }
                <button className="chat--content-add-friend" onClick={onAddFriend}>
                    <i className="fas fa-user-plus"></i>
                </button>
                <button className="chat--content-send-message" onClick={onMessage}>
                    <i className="far fa-comments"></i>
                </button>
            </Col>
        </StyledUserItem>
    )
}

export default withTracker(({ id }) => {

    Meteor.subscribe('chats.all');
    Meteor.subscribe('users.all');

    const myFriends = Meteor.users.find({ "profile": { "friends": id } }).fetch();
    const myConversation = ChatsCollection.find({ "participants": { "$all": [Meteor.userId(), id] }  }).fetch();

    return {
        myConversation: myConversation,
        myFriends: myFriends
    }

})(UserItem);