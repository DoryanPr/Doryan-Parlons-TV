import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import theme from '../theme/theme';
import MessageView from './chats/MessageView';
import Left from './layout/Left';
import Right from '../components/layout/Right';
import Show from '../components/homepage/Show';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Burger from './layout/Burger';
import Menu from './layout'
const App = (props: any): JSX.Element => {

  return (
    <ThemeProvider theme={theme}>
      <Burger />
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
