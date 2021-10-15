import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Profile } from './models';
import { ImagesCollection } from './images';
import { Mongo } from 'meteor/mongo';


export const ProfileCollection = new Mongo.Collection<Profile>('profile');


if (Meteor.isServer) {
    Meteor.publish('Profile.all', function () {
        return ProfileCollection.find({}, {
            fields: { services: 0 }
        })
    })

    Meteor.methods({
        "profile.insert": function (user) {
            return ProfileCollection.insert(user);
        },
        "user.update": function (_id: string, profile: any, friends: Array<string>) {
            return ProfileCollection.update({ _id }, {
                $set: {
                    $profile: {
                        $set: {
                            friends
                        }
                    }
                }
            })
        }
    })
}


Meteor.methods({
  
    'user.username': function (_id: string, username: string) {
        Accounts.setUsername(_id, username);
    },
    'user.picture': function (imageId: string) {
        const Image = ImagesCollection.findOne(imageId);
        const picture: string = Image.link();
        return ProfileCollection.update({ _id: this.userId }, {
            $set: {
                "profile.picture": picture
            }
        })
    }
})