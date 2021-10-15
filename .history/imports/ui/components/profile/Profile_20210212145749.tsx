import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Avatar from '../layout/Avatar';

const Profile = (props: any): JSX.Element => {
    
    return (
        <>
            <div className="LS--avatar">
                <Avatar inLS big avatar_url={Meteor.user().profile.picture} />
            </div>
            <ProfileForm type="username" />
            <div className="LS--desc">
                <span>Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible aupres de vos contacts </span>
            </div>
            <ProfileForm type="actu" />

        </>
    )
}

export default Profile;