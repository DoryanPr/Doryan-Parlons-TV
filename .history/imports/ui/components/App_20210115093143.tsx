import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import Burger from './layout/Burger';
import Menu from './layout/Menu';
import theme from '../theme/theme';
import MessageView from './chats/MessageView';
import Left from './layout/Left';
import Right from '../components/layout/Right';
import Show from '../components/homepage/Show';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = (props: any): JSX.Element => {
  
  const  [open, setOpen]  = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Right>
        <Router>
          <Switch>
            <Route path="/" component={Show} exact />
            <Route path="/chats/:channel" component={MessageView} exact />
          </Switch>
        </Router>
      </Right>
    </ThemeProvider>
  )
}
export default App;
