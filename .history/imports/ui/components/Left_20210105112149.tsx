import React from 'react';
import { Meteor } from 'meteor/meteor';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import Status from './Status';
import Searchbar from './Searchbar';
import ChatList from './ChatList';
import LeftSide from './LeftSide';
import LSHeader from './LSHeader';
import LSForm from './LSForm';


const icons: any[] = [

    {
        name: "circle-notch",
        func: () => { }
    },
    {
        name: "comment-alt",
        func: () => { }
    },
    {
        name: "ellipsis-v",
        func: () => { }
    }
];



const Left = (props: any): JSX.Element => {
    const { chats, onChatClick, selectedChat, OPVisible } = props;
    const [LSVisible, setLSVisible] = React.useState<boolean>(false);
   
    const renderLSComponents = (): JSX.Element => {
        return (
            <>
                <LSHeader />
                <div className="LS--avatar">
                    <Avatar big avatar_url={Meteor.user().profile.picture} />
                </div>
                <LSForm type="username"/>
                <div className="LSForm--desc">
                    <span>Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible aupres de vos contacts </span>
                </div>
                <LSForm type="actu"/>

            </>
        )
    }
    return (
        <StyledLeft OPVisible={OPVisible}>
            {!LSVisible ? (
                <>
                    <Header icons={icons} iconClass="greyIcon">
                        <Avatar
                            onAvatarClick={toggleLS}
                            avatar_url={Meteor.user().profile.picture}
                        />
                    </Header>
                    <Status />
                    <Searchbar />
                    <ChatList
                        chats={chats}
                        onChatClick={onChatClick}
                        selectedChat={selectedChat}
                    />
                </>
            ) : (
                <LeftSide>
                    { renderLSComponents()} 
                </LeftSide>
            )}
        </StyledLeft>
    )
}
export default Left;