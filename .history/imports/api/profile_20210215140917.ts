import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Profile } from './models';
import { ImagesCollection } from './images';
import { Mongo } from 'meteor/mongo';


export const ProfileCollection = new Mongo.Collection<Profile>('user');


if (Meteor.isServer) {
    Meteor.publish('Profile.all', function () {
        return Meteor.Profile.find({}, {
            fields: { services: 0 }
        })
    })

    Meteor.methods({
        "user.insert": function (user) {
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
    'user.login': function ({ username, phone, password }) {
        let userExist: boolean;
        const user: User = Accounts.findUserByUsername(username);
        // !! =false
        userExist = !!user;
        if (userExist) {
            console.log('User Exist', user);
            //logger l'utilisateur
            return true;
        } else {
            console.log('User dont exist');
            //Créer l'utilisateur
            return Accounts.createUser({
                username,
                password,
                profile: {
                    phone,
                    actu: "Salut, j'utilise Parlons TV",
                    picture: "Avatar url = https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
                }
            });
        }
    },
    'user.username': function (_id: string, username: string) {
        Accounts.setUsername(_id, username);
    },
    'user.picture': function (imageId: string) {
        const Image = ImagesCollection.findOne(imageId);
        const picture: string = Image.link();
        return Meteor.Profile.update({ _id: this.userId }, {
            $set: {
                "profile.picture": picture
            }
        })
    }
})