import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const Profile = (props: any): JSX.Element => {
    
    return (
        <>
            <LSHeader onLSClose={toggleLS} />
            <div className="LS--avatar">
                <Avatar inLS big avatar_url={Meteor.user().profile.picture} />
            </div>
            <LSForm type="username" />
            <div className="LS--desc">
                <span>Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible aupres de vos contacts </span>
            </div>
            <LSForm type="actu" />

        </>
    )
}

export default Profile;