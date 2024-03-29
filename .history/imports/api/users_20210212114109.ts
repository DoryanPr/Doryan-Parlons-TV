import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { User } from './models';
import { ImagesCollection } from './images';
import { Mongo } from 'meteor/mongo';

export const dummyUsers:User[] = [
    {
        _id: '0',
        username: 'Ethan Gonzalez',
        password: "password",
        profile: {
            phone: '+222222222',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '1',
        username: 'Bryan Wallace',
        password: "password",
        profile: {
            phone: '+333333333',
            picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '2',
        username: 'Avery Stewart',
        password: "password",
        profile: {
            phone: '+444444444',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '3',
        username: 'Katie Peterson',
        password: "password",
        profile: {
            phone: '+555555555',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '4',
        username: 'Ray Edwards',
        password: "password",
        profile: {
            phone: '+666666666',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '5',
        username: 'Samy Smith',
        password: "password",
        profile: {
            phone: '+777777777',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '6',
        username: 'John Smith',
        password: "password",
        profile: {
            phone: '+888888888',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '7',
        username: 'Adrianna Scott',
        password: "password",
        profile: {
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '8',
        username: 'Julienne Smith',
        password: "password",
        profile: {
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '9',
        username: 'Marco',
        password: "password",
        profile: {
            phone: '+101010101',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }
]

export const UsersCollection = new Mongo.Collection<User>('message');


if (Meteor.isServer) {
    Meteor.publish('users.all', function () {
        return Meteor.users.find({}, {
            fields: {services: 0}
        })
    })

    Meteor.methods({
        "user.insert": function (user) {
            return UsersCollection.insert(user);
        },
        "user.update": function (_id: string, profile: any) {
            return UsersCollection.update({ _id }, {
                profile: {
                    $set: {
                        
                    }
                }
            })
        }
    })
}


Meteor.methods({
    'user.login': function ({ username, phone, password}) {
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
        return Meteor.users.update({ _id: this.userId }, {
            $set: {
                "profile.picture": picture
            }
        })
    }
})