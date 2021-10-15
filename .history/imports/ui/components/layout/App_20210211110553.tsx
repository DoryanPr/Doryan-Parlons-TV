import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import Burger from './Burger';
import Left from './Left';
import Menu from './Menu';

import theme from '../../theme/theme';

import MessageView from '../chats/MessageView';

import Right from './Right';
import Show from '../homepage/Show';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyledApp from '../../elements/layout/StyledApp';
import Footer from '../homepage/Footer';
import Authentication from '../authentication/Authentication';
import ShowMSG from '../messages/ShowMSG';

const App = (props: any): JSX.Element => {
  
  const  [open, setOpen]  = React.useState(!window.matchMedia("(max-width:768px)").matches);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Left open={open} setOpen={setOpen} />
        <Right>
          <Burger open={open} setOpen={setOpen} />
          <Router>
            <Switch>
              <Route path="/" component={Show} exact />
              <Route path="/messages" component={ShowMSG} exact />
              <Route path="/friends" component={ShowFriends} exact />
              <Route path="/chats/:channel" component={MessageView} exact />
            </Switch>
            <Authentication />
          </Router>
        </Right>
        { window.location.pathname == "/" ?
          ( <Footer /> ) :
          ( "" )
        }
      </StyledApp>
    </ThemeProvider>
  )
}
export default App;
