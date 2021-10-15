import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Avatar from '../layout/Avatar';
import ProfileForm from './ProfileForm';
import { uploadFile } from '../../../api/helpers';

const Profile = (props: any): JSX.Element => {

    const { onAddFriend, user, isMe } = props;
    const isInFriendList = () => {
        return Meteor.user().profile.friends.includes(user._id)
    }
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files[0];
        if (file) {
            uploadFile(file, false);
        }
    }
    return (
        <>
            <div className="profile--avatar">
                <Avatar inLS big avatar_url={user.profile.picture} />
            </div>
            { isMe ? (
                <input
                    className="profile--avatar--modifier"
                    id="avatarupload"
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                    value="Modifier votre photo"
                />
            ) : (
                    <div></div>
                )}

            <ProfileForm
                type="username"
                value={user.profile.name}
                isMe={isMe}
            />
            <div className="profile--desc">
                <span>Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible aupres de vos contacts </span>
            </div>
            <ProfileForm
                type="actu"
                value={user.profile.actu}
                isMe={isMe}
            />

            {!isMe && !isInFriendList() ? (
                <button className="profile-add-friend" onClick={onAddFriend}>
                    <i className="fas fa-user-plus"></i>
                </button>
            ) : (
                    <div></div>
                )}

        </>
    )
}

export default withTracker(({ match }) => {

    const user = Meteor.users.findOne({ _id: match.params.user })

    return {
        user: user,
        isMe: match.params.user == Meteor.userId()
    }
})(Profile);