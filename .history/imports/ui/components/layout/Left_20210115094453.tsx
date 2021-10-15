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
    
    return (
        <StyledLeft open={open} onClick={() => setOpen(!open)} >
            <Menu open={open} setOpen={setOpen} />
        </StyledLeft>
    )
}
export default Left;