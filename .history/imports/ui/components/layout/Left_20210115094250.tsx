import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// Custom components
import Avatar from '../Avatar';
import ChatList from '../ChatList';
import Home from '../homepage/Home';
import Header from '../Header';
import LSHeader from '../LSHeader';
import LSForm from '../LSForm';
import LeftSide from '../LeftSide';
import MyFriends from '../homepage/MyFriends';
import Msg from '../homepage/MSG';
import Status from '../Status';
import Searchbar from '../Searchbar';
import UsersList from '../UsersList';

// Styled Components
import StyledAvatar from '../../elements/homepage/StyledAvatar';
import StyledHome from '../../elements/homepage/StyledHome';
import StyledLeft from '../../elements/homepage/StyledLeft';
import StyledMSG from '../../elements/homepage/StyledMSG';
import StyledMyFriends from '../../elements/homepage/StyledMyFriends';
import StyledUsersList from '../../elements/StyledUsersList';
import Menu from './Menu';






const Left = ({ open, setOpen }): JSX.Element => {

  
    const [LSVisible, setLSVisible] = React.useState<boolean>(false);
    const [UListVisible, setUListVisible] = React.useState<boolean>(false);

    const showUList = (): void => {
        setLSVisible(true);
        setUListVisible(true);
    }

   
    const renderLSComponents = (): JSX.Element => {
        if (UListVisible) {
            return (
                <>
                    <LSHeader onLSClose={toggleLS} title="Nouvelle Discussion" />
                    <Searchbar placeholder="Chercher Contact" />
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
        <StyledLeft open={open} onClick={() => setOpen(!open)} >
            <Menu open={open} setOpen={setOpen} />
        </StyledLeft>
    )
}
export default withTracker(() => {
    return {
        picture: Meteor.user().profile.picture
    }
})(Left);