import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import Status from './Status';
import Searchbar from './Searchbar';
import ChatList from './ChatList';
import LeftSide from './LeftSide';
import LSHeader from './LSHeader';
import LSForm from './LSForm';
import UsersList from './UsersList';
import StyledUsersList from '../elements/StyledUsersList';




const Left = (props: any): JSX.Element => {

    const icons: any[] = [

        {
            name: "circle-notch",
            func: () => { }
        },
        {
            name: "comment-alt",
            func: () => { showUList() }
        },
        {
            name: "ellipsis-v",
            func: () => { }
        }
    ];

    const { chats, onChatClick, selectedChat, OPVisible, picture } = props;
    const [LSVisible, setLSVisible] = React.useState<boolean>(false);
    const [UListVisible, setUListVisible] = React.useState<boolean>(false);

    const showUList = (): void => {
        setLSVisible(true);
        setUListVisible(true);
    }

    const userItemClick = (_id: string, username: string, picture: string): void => {
        toggleLS();
        props.onUserItemClick(_id, username, picture);
    }
    const renderLSComponents = (): JSX.Element => {
        if (UListVisible) {
            return (
                <>
                    <LSHeader onLSClose={toggleLS} title="Nouvelle Discussion" />
                    <Searchbar placeholder="Chercher Contact" />
                    <UsersList onUserItemClick={userItemClick}/>
                </>
            )
        }
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
    const toggleLS = (): void => {
        if (!LSVisible) {
            setLSVisible(true);
        } else {
            setLSVisible(false);
            setUListVisible(false);
        }
    }
    return (
        <StyledLeft OPVisible={OPVisible}>
            {!LSVisible ? (
                <>
                    <Header icons={icons} iconClass="greyIcon">
                        <Avatar
                            onAvatarClick={toggleLS}
                            avatar_url={picture}
                        />
                    </Header>
                    
                </>
            ) : (
                    <LeftSide>
                        { renderLSComponents()}
                    </LeftSide>
                )}
        </StyledLeft>
    )
}
export default withTracker(() => {
    return {
        picture: Meteor.user().profile.picture
    }
})(Left);