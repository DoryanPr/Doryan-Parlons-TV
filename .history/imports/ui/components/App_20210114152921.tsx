import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import theme from '../theme/NormalTheme';
import MessageView from './chats/MessageView';
import Left from './layout/Left';
import Right from './layout/Right';
import Show from './homepage/Show';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (props: any): JSX.Element => {

  return (
    <ThemeProvider theme={theme}>
        <Left/>
        <Right>
          <Router>
            <Switch>
              <Route path="/" component={Show} exact />
            <Route path="/chats/:channel" component={MessageView} exact />
            <Route path="/contact" component={Contact}
            </Switch>
          </Router>
        </Right>
    </ThemeProvider>
  ) 
}
export default App;
