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
import StyledLeft from '../../elements/homepage/StyledLeft';

import Menu from './Menu';


const Left = ({ open, setOpen }): JSX.Element => {

    return (
        <Menu open={open} setOpen={setOpen} />
    
    )
}
export default Left;