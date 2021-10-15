import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { User } from './models';
import { ImagesCollection } from './images';
import { Mongo } from 'meteor/mongo';

export const dummyUsers: User[] = [
    {
        _id: '0',
        password: "password",
        profile: {
            name: 'Ethan Gonzalez',
            phone: '+222222222',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '1',
        password: "password",
        profile: {
            name: 'Bryan Wallace',
            phone: '+333333333',
            picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '2',
        password: "password",
        profile: {
            name: 'Avery Stewart',
            phone: '+444444444',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '3',
        password: "password",
        profile: {
            name: 'Katie Peterson',
            phone: '+555555555',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '4',
        password: "password",
        profile: {
            name: 'Ray Edwards',
            phone: '+666666666',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '5',
        password: "password",
        profile: {
            name: 'Samy Smith',
            phone: '+777777777',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '6',
        password: "password",
        profile: {
            name: 'John Smith',
            phone: '+888888888',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '7',
        password: "password",
        profile: {
            name: 'Adrianna Scott',
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '8',
        password: "password",
        profile: {
            name: 'Julienne Smith',
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }, {
        _id: '9',
        password: "password",
        profile: {
            name: 'Marco',
            phone: '+101010101',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise ParlonsTV",
            friends: ["w3HckFEXaufvaFrxA"]
        }
    }
]

if (Meteor.isServer) {
    Meteor.publish('users.all', function () {
        return Meteor.users.find({}, {
            fields: { services: 0 }
        })
    })

    Meteor.methods({
     
        "user.update": function (params) {
            const id = params._id;
            const friends = params.friends;
            const username = params.name;
            return Meteor.users.update({ _id: id }, {
                $set: {
                    "profile.friends": friends,
                    "profile.name": username
                }
            })
        }
    })

    Meteor.methods({
      
        "user.name": function (params) {
            const id = params._id;
            const name = params.name;
            const actu = params.actu;

            return Meteor.users.update({ _id: id }, {
                $set: {
                    "profile.name": name,
                    "profile.actu": actu,


                }
            })
        }
    })

    Meteor.methods({
      
        "user.actu": function (params) {
            const id = params._id;
            const actu = params.actu;
            return Meteor.users.update({ _id: id }, {
                $set: {
                    "profile.actu": actu,
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
        return Meteor.users.update({ _id: this.userId }, {
            $set: {
                "profile.picture": picture
            }
        })
    }
})